import { Relation } from "./relation.model";

export const RELATIONS: Relation[] = [
    {
        id: 'buster-verveine',
        characterIds: ['buster', 'verveine'],
        opinions: [
            {
                authorId: 'buster',
                targetId: 'verveine',
                note: 10,
                description: 'Buster aime Verveine et souhaite passer le restant de ses jours avec. Ils doivent cependant cacher leur couple aux yeux des autres, ce que Buster ne vit pas toujours très bien. Buster est très attentif à Verveine et à sa santé (notamment celle de sa plante). Il aime lui accorder des attentions discrètes.',
                iconPath: 'assets/Buster/newni5.png'
            },
            {
                authorId: 'verveine',
                targetId: 'buster',
                note: 9.5,
                description: 'Verveine a eu du mal à accepter à être en couple avec Buster pour les nombreuses conséquences que cela entraînerait. Il est encore un peu timide dans cette relation, mais il adore leur moment passé en couple. Il aime les contacts physiques et le réconfort apporté par la présence de Buster. Il se sent important dans ses yeux, et cela booste sa confiance en lui.\nVerveine est le partenaire de Buster. S\'ils ne sont pas très démonstratifs devant les autres pour des raisons de sécurité, ils sont très tendres entre eux en privé. Verveine n’apprécie cependant pas quand Buster essaie de le mettre en avant devant les autres, et cela est parfois un sujet de discussion tendu entre eux.',
                iconPath: 'assets/Verveine/MaRuCatss.png'
            },
        ],
        imagePaths: [
        'assets/Relations/BusterVerveine/newni.png',
        'assets/Relations/BusterVerveine/newni2.png'
        ],
        artists:[
            'Newni', 'Newni'
        ]
    },
];