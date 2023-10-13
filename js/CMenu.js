function CMenu(){
    var _pStartPosAudio;
    var _pStartPosInfo;

    var _oBg;
    var _oBut1Player;
    var _oBut2Players;
    var _oAudioToggle;
    var _oFade;
    var odeletebtn;

    this._init = function(){

       

        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_menu'));
        s_oStage.addChild(_oBg);

        var deleteBtn = s_oSpriteLibrary.getSprite('deleteBtn');
		odeletebtn = new CGfxButton((CANVAS_WIDTH/14),CANVAS_HEIGHT -1070,deleteBtn);
		odeletebtn.addEventListener(ON_MOUSE_UP, this.gameClose, this);


        var oSprite = s_oSpriteLibrary.getSprite('but_box_2');
        _oBut1Player = new CTextButton((CANVAS_WIDTH/2),CANVAS_HEIGHT -230,oSprite,TEXT_BUT1PLAYER,PRIMARY_FONT,"#ffffff",30,s_oStage);
        _oBut1Player.addEventListener(ON_MOUSE_UP, this._onBut1Player, this);

        var oSprite = s_oSpriteLibrary.getSprite('but_box_2');
        _oBut2Players = new CTextButton((CANVAS_WIDTH/2),CANVAS_HEIGHT -135,oSprite,TEXT_BUT2PLAYERS,PRIMARY_FONT,"#ffffff",30,s_oStage);
        _oBut2Players.addEventListener(ON_MOUSE_UP, this._onBut2Players, this);

        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {x: CANVAS_WIDTH - (oSprite.height/2)- 10, y: (oSprite.height/2) + 10};
            _oAudioToggle = new CToggle(_pStartPosAudio.x,_pStartPosAudio.y,oSprite);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        }

        _pStartPosInfo = {x: (oSprite.height/2) + 10, y: (oSprite.height/2) + 10};

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

        s_oStage.addChild(_oFade);

        createjs.Tween.get(_oFade).to({alpha:0}, 500).call(function(){_oFade.visible = false;});

        this.refreshButtonPos(s_iOffsetX,s_iOffsetY);
    };

    this.gameClose=function(){
			
        //	let message="hello hasnain how are you ";
        //	var targetOrigin = "https://playcanv.as"; 
    
        ///	window.parent.postMessage(message, targetOrigin);
            window.top.postMessage("Playcanvas_Ready", "*");
    
        };
        

    this.unload = function(){
        _oBut1Player.unload();
        _oBut1Player = null;

        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }

        s_oStage.removeAllChildren();
        s_oMenu = null;
    };

    this.refreshButtonPos = function(iNewX,iNewY){
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
                _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX,iNewY + _pStartPosAudio.y);
        }
    };

    this._onBut1Player = function(){
        this.unload();
        s_oMain.gotoGameModeMenu(false);

        $(s_oMain).trigger("start_session");
    };

    this._onBut2Players = function(){
        this.unload();
        s_oMain.gotoGameModeMenu(true);

        $(s_oMain).trigger("start_session");
    };

    this._onAudioToggle = function(){
        createjs.Sound.setMute(!s_bAudioActive);
    };

    s_oMenu = this;

    this._init();
}

var s_oMenu = null;
