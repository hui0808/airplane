const globalDebug = true

const anime = {
    player: {
        normal: {
            me_1: 'img/me_1.png',
            me_2: 'img/me_2.png',
        },
        die: {
            me_die1: 'img/me_die1.png',
            me_die2: 'img/me_die2.png',
            me_die3: 'img/me_die3.png',
            me_die4: 'img/me_die4.png',
        },
    },

    enemy1: {
        normal: {
            plain1: 'img/plain1.png',
        },
        hurt: {
            plain1_hurt: 'img/plain1.png',
        },
        die: {
            plain1_die1: 'img/plain1_die1.png',
            plain1_die2: 'img/plain1_die2.png',
            plain1_die3: 'img/plain1_die3.png',
        },
    },

    enemy2: {
        normal: {
            plain2: 'img/plain2.png',
        },
        hurt: {
            plain2_hurt: 'img/plain2_hurt.png',
        },
        die: {
            plain2_die1: 'img/plain2_die1.png',
            plain2_die2: 'img/plain2_die2.png',
            plain2_die3: 'img/plain2_die3.png',
            plain2_die4: 'img/plain2_die4.png',
        },
    },

    enemy3: {
        normal: {
            plain3_1: 'img/plain3_1.png',
            plain3_2: 'img/plain3_2.png',
        },
        hurt: {
            plain3_hurt: 'img/plain3_hurt.png',
        },
        die: {
            plain3_die1: 'img/plain3_die1.png',
            plain3_die2: 'img/plain3_die2.png',
            plain3_die3: 'img/plain3_die3.png',
            plain3_die4: 'img/plain3_die4.png',
            plain3_die5: 'img/plain3_die5.png',
            plain3_die6: 'img/plain3_die6.png',
        },
    },
}

const images = {
    bg: 'img/bg.jpg',
    bomb: 'img/bomb.png',
    cartridge: 'img/cartridge.png',
    cartridge_power: 'img/cartridge_power.png',
    logo: 'img/logo.png',
    prop1: 'img/prop1.png',
    prop2: 'img/prop2.png',
}

const config = {
    fps: {
        value: 30,
        text: "fps: ",
        min: 1,
        max: 60,
    },
    bullet_speed: {
        value: 30,
        text: "子弹速度: ",
        min: 1,
        max: 100,
    },
    bullet_cooldown: {
        value: 4,
        text: "子弹冷却时间: ",
        min: 1,
        max: 20,
    },
    player_speed: {
        value: 10,
        text: "玩家速度: ",
        min: 1,
        max: 50,
    },
}