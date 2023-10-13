function CGameModeMenu(){
    var _pStartPosAudio;
    
    var _oBg;
    var _oSprite3x3;
    var _oSprite5x5;
    var _oSprite7x7;
    var _oAudioToggle;
    var _oFade;
    
    this._init = function(){
        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_game'));
        s_oStage.addChild(_oBg);
	
        var oSpriteText = s_oSpriteLibrary.getSprite('choose_text');
        var oChooseText = createBitmap(oSpriteText);
        oChooseText.regX = oSpriteText.width/2;
        oChooseText.x = CANVAS_WIDTH/2;
        oChooseText.y = 380;
        s_oStage.addChild(oChooseText);
	
        _oSprite3x3 = createBitmap(s_oSpriteLibrary.getSprite('but_3x3'));
        _oSprite3x3.x = 160;
        _oSprite3x3.y = 500;
        s_oStage.addChild(_oSprite3x3);
        _oSprite3x3.on("click", function(){
                            playSound("press_but",1,0);
                            this._onBut3x3();
        },this);

        _oSprite5x5 = createBitmap(s_oSpriteLibrary.getSprite('but_5x5'));
        _oSprite5x5.x = 365;
        _oSprite5x5.y = 500;
        s_oStage.addChild(_oSprite5x5);
        _oSprite5x5.on("click", function(){
			playSound("press_but",1,0);
            this._onBut5x5();
        },this);

        _oSprite7x7 = createBitmap(s_oSpriteLibrary.getSprite('but_7x7'));
        _oSprite7x7.x = 570;
        _oSprite7x7.y = 500;
        s_oStage.addChild(_oSprite7x7);
        _oSprite7x7.on("click", function(){
			playSound("press_but",1,0);
            this._onBut7x7();
        },this);

        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {x: CANVAS_WIDTH - (oSprite.height/2)- 10, y: (oSprite.height/2) + 10};    
            _oAudioToggle = new CToggle(_pStartPosAudio.x,_pStartPosAudio.y,oSprite);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        }

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        
        s_oStage.addChild(_oFade);
        
        createjs.Tween.get(_oFade).to({alpha:0}, 500).call(function(){_oFade.visible = false;});  
        
        this.refreshButtonPos(s_iOffsetX,s_iOffsetY);
    };
    
    this.unload = function(){
        _oSprite3x3.removeAllEventListeners();
        _oSprite5x5.removeAllEventListeners();
        _oSprite7x7.removeAllEventListeners();
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        
        s_oStage.removeAllChildren();
        s_oModeMenu = null;
    };
    
    this.refreshButtonPos = function(iNewX,iNewY){
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX,iNewY + _pStartPosAudio.y);
        }
    };
    
    this._onBut3x3 = function(){
        this.unload();

        s_oMain.gotoGame(3);
    };

    this._onBut5x5 = function(){
        this.unload();
        
        s_oMain.gotoGame(5);
    };

    this._onBut7x7 = function(){
        this.unload();

        s_oMain.gotoGame(7);
    };

    this._onAudioToggle = function(){
        createjs.Sound.setMute(!s_bAudioActive);
    };
    
    s_oModeMenu = this;
    
    this._init();
}

var s_oModeMenu = null;