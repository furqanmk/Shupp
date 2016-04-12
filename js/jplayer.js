(function ($) {
"use strict";
$(document).ready(function($){
/*--
	Home Player With Play List
----------------------------------------*/
var myPlaylist = new jPlayerPlaylist({
	jPlayer: "#home-player1",
	cssSelectorAncestor: "#home-player"
},  [
	{
		title:"7 Years",
		mp3:"audio/7-Years-by-Lukas-Graham.mp3",
		m4a: "audio/7-Years-by-Lukas-Graham.m4a",
		oga:"audio/7-Years-by-Lukas-Graham.ogg"
	},
	{
		title:"30 HOURS",
		mp3:"audio/30-HOURS-by-Kanye-West.mp3",
		m4a: "audio/30-HOURS-by-Kanye-West.m4a",
		oga:"audio/30-HOURS-by-Kanye-West.ogg"
	},
	{
		title:"Always Be There",
		mp3:"audio/Always-Be-There-by-Elizabeth.mp3",
		m4a: "audio/Always-Be-There-by-Elizabeth.m4a",
		oga:"audio/Always-Be-There-by-Elizabeth.ogg"
	},
	{
		title:"I Want It All",
		mp3:"audio/I-Want-It-All-by-JTLive.mp3",
		m4a: "audio/I-Want-It-All-by-JTLive.m4a",
		oga:"audio/I-Want-It-All-by-JTLive.ogg"
	},
	{
		title:"My First Time",
		mp3:"audio/My-First-Time-StefJames.mp3",
		m4a: "audio/My-First-Time-StefJames.m4a",
		oga:"audio/My-First-Time-StefJames.ogg"
	}
],
{
	playlistOptions: {
		enableRemoveControls: true
	},
	swfPath: "../img",
	supplied: "webmv, ogv, m4v, oga, mp3",
	wmode: "window",
	useStateClassSkin: true,
	autoBlur: false,
	smoothPlayBar: true,
	keyEnabled: true,
	audioFullScreen: true
});
/*--
	Play list Buttons
-----------------------------------*/
$( "#playlist" ).click(function() {
  $( ".jp-playlist" ).slideToggle( "slow" );
});
$( ".single-play .jp-controls > button" ).click(function() {
  $( ".single-play .jp-controls > button.jp-stop" ).css({"opacity": 0, "z-index": 1});
  $( ".single-play .jp-controls > button.jp-play" ).css({"opacity": 1, "z-index": 2});
  $(this).css({"opacity": 0, "z-index": 1});
  $(this).siblings().css({"opacity": 1, "z-index": 2});
});
/*--
	Play list Section
-----------------------------------*/
$("#next-play-1").jPlayer({
	ready: function () {
		$(this).jPlayer("setMedia", {
			title: "7 Years",
			mp3:"audio/7-Years-by-Lukas-Graham.mp3",
			m4a: "audio/7-Years-by-Lukas-Graham.m4a",
			oga:"audio/7-Years-by-Lukas-Graham.ogg"
		});
	},
	play: function() { // To avoid multiple jPlayers playing together.
		$(this).jPlayer("pauseOthers");
	},
	swfPath: "../img",
	supplied: "webmv, ogv, m4v, oga, mp3",
	wmode: "window",
	globalVolume: true,
	useStateClassSkin: true,
	autoBlur: false,
	smoothPlayBar: true,
	keyEnabled: true
});
$("#next-play-2").jPlayer({
	ready: function () {
		$(this).jPlayer("setMedia", {
			title:"30 HOURS",
			mp3:"audio/30-HOURS-by-Kanye-West.mp3",
			m4a: "audio/30-HOURS-by-Kanye-West.m4a",
			oga:"audio/30-HOURS-by-Kanye-West.ogg"
		});
	},
	play: function() { // To avoid multiple jPlayers playing together.
		$(this).jPlayer("pauseOthers");
	},
	swfPath: "../img",
	supplied: "webmv, ogv, m4v, oga, mp3",
	cssSelectorAncestor: "#jp_container_2",
	wmode: "window",
	globalVolume: true,
	useStateClassSkin: true,
	autoBlur: false,
	smoothPlayBar: true,
	keyEnabled: true
});
$("#next-play-3").jPlayer({
	ready: function () {
		$(this).jPlayer("setMedia", {
			title:"Always Be There",
			mp3:"audio/Always-Be-There-by-Elizabeth.mp3",
			m4a: "audio/Always-Be-There-by-Elizabeth.m4a",
			oga:"audio/Always-Be-There-by-Elizabeth.ogg"
		});
	},
	play: function() { // To avoid multiple jPlayers playing together.
		$(this).jPlayer("pauseOthers");
	},
	swfPath: "../img",
	supplied: "webmv, ogv, m4v, oga, mp3",
	cssSelectorAncestor: "#jp_container_3",
	wmode: "window",
	globalVolume: true,
	useStateClassSkin: true,
	autoBlur: false,
	smoothPlayBar: true,
	keyEnabled: true
});
$("#next-play-4").jPlayer({
	ready: function () {
		$(this).jPlayer("setMedia", {
			title:"I Want It All",
			mp3:"audio/I-Want-It-All-by-JTLive.mp3",
			m4a: "audio/I-Want-It-All-by-JTLive.m4a",
			oga:"audio/I-Want-It-All-by-JTLive.ogg"
		});
	},
	play: function() { // To avoid multiple jPlayers playing together.
		$(this).jPlayer("pauseOthers");
	},
	swfPath: "../img",
	supplied: "webmv, ogv, m4v, oga, mp3",
	cssSelectorAncestor: "#jp_container_4",
	wmode: "window",
	globalVolume: true,
	useStateClassSkin: true,
	autoBlur: false,
	smoothPlayBar: true,
	keyEnabled: true
});
	
});
})(jQuery);	