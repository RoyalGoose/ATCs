const express = require("express");

const router = express.Router();

// GET ATC
router.get("/", (req, res) => {
	res.status(200).send({
		"Железная": [
			"Avaya IP Office",
			"Cisco UCM",
			"LG iPecs",
			"Panasonic KX-TDA",
			"Samsung Office",
		],
		"Программная": [
			"Ascozia",
			"Asteriks",
			"Elastix",
			"FreePBX",
			"Oktell",
			"VoxLink",
			"Yeastar",
		],
		"Облачная ATC": [
			"BeeLine",
			"Mango",
			"MTS",
			"Rostelecom",
			"Telfin",
			"UIS",
			"Yandex",
			"Zadarma",
		],
		"iToolabs (Облачная ATC)": [
			"Altegro",
			"Comiten",
			"COMLINK",
			"DreamNet",
			"Easytel",
			"EVO",
			"Finenumbers",
			"OpenSpeak",
			"Power Telecom",
			"RiNet",
			"SipVip",
			"Smartcard",
			"Spacetel",
			"Tashir Telecom",
			"Tekmi",
			"TelefonN",
			"Telepro",
			"Virgin Connect",
			"Авантел",
			"АльянсТелеком",
			"ВАМтел",
			"ВекторТел",
			"Вест колл (Москва)",
			"ВестКолл СПб",
			"Гарс Телеком",
			"Гравител",
			"Деловая Сеть – Иркутск",
			"Интеграл",
			"Инт-Информ",
			"Кловертел",
			"Корпорация VoIP",
		],
	});
});

module.exports = router;
