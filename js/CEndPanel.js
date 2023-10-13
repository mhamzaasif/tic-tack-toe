function CEndPanel(iWinner){

    var _oSprPanel;
    var _oSprWinner;
    var _oTextWin;
    var _oButReplay;
    var _oAudioToggle;
    
    this._init = function(iWinner){
        _oSprPanel = createBitmap(s_oSpriteLibrary.getSprite('panel'));
        s_oStage.addChild(_oSprPanel);

        if (iWinner === 1) {
            _oSprWinner = createBitmap(s_oSpriteLibrary.getSprite('tokenX'));
            _oTextWin = new createjs.Text(TEXT_PL1_VICTORY, "52px "+PRIMARY_FONT, "White");
            _oSprWinner.x = 250;
            _oSprWinner.y = 470;
            _oTextWin.x = CANVAS_WIDTH/2 + 70;
            _oTextWin.y = (CANVAS_HEIGHT/2) - 60;
            _oTextWin.textBaseline = "alphabetic";
            _oTextWin.textAlign = "center";
            _oTextWin.lineWidth = 240;
            _oTextWin.shadow = new createjs.Shadow("#000000", 6, 6, 2);

            s_oStage.addChild(_oSprWinner);
            s_oStage.addChild(_oTextWin);

        } else if (iWinner === 2) {
            _oSprWinner = createBitmap(s_oSpriteLibrary.getSprite('tokenO'));
            _oTextWin = new createjs.Text(TEXT_PL2_VICTORY, "52px "+PRIMARY_FONT, "White");
            _oSprWinner.x = 250;
            _oSprWinner.y = 470;
            _oTextWin.x = CANVAS_WIDTH/2 + 70;
            _oTextWin.y = (CANVAS_HEIGHT/2) - 60;
            _oTextWin.textBaseline = "alphabetic";
            _oTextWin.textAlign = "center";
            _oTextWin.lineWidth = 240;
            _oTextWin.shadow = new createjs.Shadow("#000000", 6, 6, 2);

            s_oStage.addChild(_oSprWinner);
            s_oStage.addChild(_oTextWin);

        } else { // Draw
            _oTextWin = new createjs.Text(TEXT_DRAW, "52px "+PRIMARY_FONT, "White");
            _oTextWin.x = CANVAS_WIDTH/2;
            _oTextWin.y = (CANVAS_HEIGHT/2) - 60;
            _oTextWin.textBaseline = "alphabetic";
            _oTextWin.textAlign = "center";
            _oTextWin.shadow = new createjs.Shadow("#000000", 6, 6, 2);

            s_oStage.addChild(_oSprWinner);
            s_oStage.addChild(_oTextWin);
        };
        
        var oSprite = s_oSpriteLibrary.getSprite('but_box_2');
        _oButReplay = new CTextButton(CANVAS_WIDTH/2,CANVAS_HEIGHT/2 + 85,oSprite,TEXT_PLAYAGAIN,PRIMARY_FONT,"#ffffff",30,s_oStage);
        _oButReplay.addEventListener(ON_MOUSE_UP, this._onButPlayAgain, this);

        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _oAudioToggle = new CToggle(CANVAS_WIDTH - (oSprite.width/2) + 5,(oSprite.height/2) + 20,oSprite);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        };

        var oFade = new createjs.Shape();
        oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        
        s_oStage.addChild(oFade);
		
        $(s_oMain).trigger("end_game",[iWinner]);
		
        createjs.Tween.get(oFade).to({alpha:0}, 1000).call(function(){oFade.visible = false;$(s_oMain).trigger("show_interlevel_ad");});  
    };
    
    this.unload = function(){
        _oButReplay.unload(); 
        _oButReplay = null;
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
    };
    
    this._onButPlayAgain = function(){
        this.unload();
        s_oGame.unload();
    };

    this._onAudioToggle = function(){
        createjs.Sound.setMute(!s_bAudioActive);
    };
    
    this._init(iWinner);
}