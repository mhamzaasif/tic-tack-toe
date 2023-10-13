function CInterface(iMatrixSize){
    var _pStartPosAudio;
    var _pStartPosExit;
    
    var _oAudioToggle;
    var _oBackground;
    var _oButExit;
    var _oTextActivePl;
	var _oTextHelp;
    
    this._init = function(iMatrixSize){
        _oBackground = createBitmap(s_oSpriteLibrary.getSprite('bg_game'));
        s_oStage.addChild(_oBackground);

        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {x: CANVAS_WIDTH - (oSprite.width/2) -30, y: (oSprite.height/2) + 20};         
            _oAudioToggle = new CToggle(_pStartPosAudio.x,_pStartPosAudio.y,oSprite);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        }

        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit={x:CANVAS_WIDTH - (oSprite.width/2) + 5,y:(oSprite.height/2) + 14};
        _oButExit = new CGfxButton(_pStartPosExit.x,_pStartPosExit.y,oSprite);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);

        var szActivePl = TEXT_ACTIVEPLAYER.pt1 + s_oGame.getActivePlayer() + TEXT_ACTIVEPLAYER.pt2;
        _oTextActivePl = new createjs.Text(szActivePl, "52px "+PRIMARY_FONT, "White");
        _oTextActivePl.x = CANVAS_WIDTH/2;
        _oTextActivePl.y = 180;
        _oTextActivePl.textBaseline = "alphabetic";
        _oTextActivePl.textAlign = "center";
        _oTextActivePl.shadow = new createjs.Shadow("#000000", 6, 6, 2);
        s_oStage.addChild(_oTextActivePl);
		
        var szTextHelp;
        if(iMatrixSize > 3){
                szTextHelp = TEXT_FOUR_IN_ROW;
        }else{
                szTextHelp = TEXT_THREE_IN_ROW;
        }

        _oTextHelp = new createjs.Text(szTextHelp, "30px "+PRIMARY_FONT, "White");
        _oTextHelp.x = CANVAS_WIDTH/2;
        _oTextHelp.y = CANVAS_HEIGHT - 180;
        _oTextHelp.textBaseline = "alphabetic";
        _oTextHelp.textAlign = "center";
        _oTextHelp.shadow = new createjs.Shadow("#000000", 3, 3, 2);
        s_oStage.addChild(_oTextHelp);
        
        this.refreshButtonPos(s_iOffsetX,s_iOffsetY);
    };
    
    this.unload = function(){
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
        }

        _oButExit.unload();

        s_oInterface = null;
    };
    
    this.refreshButtonPos = function(iNewX,iNewY){
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX,iNewY + _pStartPosAudio.y);
        }
        _oButExit.setPosition(_pStartPosExit.x - iNewX,_pStartPosExit.y + iNewY);
    };

    this.update = function(){
        var szActivePl = TEXT_ACTIVEPLAYER.pt1 + s_oGame.getActivePlayer() + TEXT_ACTIVEPLAYER.pt2;

        createjs.Tween.get(_oTextActivePl).
            to({scaleX:0.1,scaleY:1.2,alpha:0.5}, 250, createjs.Ease.cubicOut).
            call(function(){
                _oTextActivePl.text = szActivePl;
                createjs.Tween.get(_oTextActivePl).
                to({scaleX:1,scaleY:1,alpha:1}, 250, createjs.Ease.cubicIn);
        });
    };

    this._onExit = function(){
        this.unload();
        s_oGame.unload();
    }
    
    this._onAudioToggle = function(){
        createjs.Sound.setMute(!s_bAudioActive);
    };
    
    s_oInterface = this;
    
    this._init(iMatrixSize);
    
    return this;
}

var s_oInterface = null;