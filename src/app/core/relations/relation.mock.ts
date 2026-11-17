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
                description: 'Buster aime Verveine et souhaite passer le restant de ses jours avec. Ils doivent cependant cacher leur couple aux yeux des autres, ce que Buster ne vit pas toujours très bien. Au fond, il aimerait partager plus à quel point il trouve Verveine génial.\nBuster est très attentif à Verveine et à sa santé (notamment celle de sa plante). Il aime lui accorder des attentions discrètes.',
                iconPath: 'assets/Buster/newni6.png'
            },
            {
                authorId: 'verveine',
                targetId: 'buster',
                note: 9.5,
                description: 'Malgré son amour pour Buster, Verveine a eu du mal à accepter à être en couple avec Buster pour les nombreuses conséquences que cela entraînerait si cela se savait. Il est encore un peu timide dans cette relation, mais il adore leur moment passé ensemble. Il aime les contacts physiques et le réconfort apporté par la présence de Buster. Il se sent important dans ses yeux, et cela booste sa confiance en lui. Ils sont très tendres entre eux en privé.\nVerveine n’apprécie cependant pas quand Buster essaie de le mettre en avant devant les autres, et cela est parfois un sujet de discussion tendu entre eux. Verveine souhaite à tout prix éviter de se faire remarquer ou qu\'on les remarque.',
                iconPath: 'assets/Verveine/MaRuCatss.png'
            },
        ],
        imagePaths: [
        'assets/00_Relations/BusterVerveine/MadPixelle.png',
        'assets/00_Relations/BusterVerveine/fyrenos.png',
        'assets/00_Relations/BusterVerveine/fyrenos2.png',
        'assets/00_Relations/BusterVerveine/newni.png',
        'assets/00_Relations/BusterVerveine/newni2.png',
        'assets/00_Relations/BusterVerveine/newni4.png',
        'assets/00_Relations/BusterVerveine/newni5.png',
        'assets/00_Relations/BusterVerveine/newni6.png',
        'assets/00_Relations/BusterVerveine/newni7.png',
        'assets/00_Relations/BusterVerveine/newni8.png',
        'assets/00_Relations/BusterVerveine/newni9.png',
        'assets/00_Relations/BusterVerveine/newni10.png',
        'assets/00_Relations/BusterVerveine/newni11.png',
        'assets/00_Relations/BusterVerveine/newni12.png',
        'assets/00_Relations/BusterVerveine/newni13.png',
        'assets/00_Relations/BusterVerveine/newni14.png'
        ],
        artists:[
            'MadPixelle', 'fyrenos', 'fyrenos',
            'Newni', 'Newni', 'Newni', 'Newni','Newni', 'Newni',
            'Newni', 'Newni','Newni', 'Newni','Newni', 'Newni',
            'Newni'
        ]
    },
    {
        id: 'kerme-medien',
        characterIds: ['kerme', 'medien'],
        opinions: [
            {
                authorId: 'kerme',
                targetId: 'medien',
                note: 8,
                description: 'Kerme s\'entend bien avec Médien, qui est toujours plutôt prévenant avec lui. Il essaie de faire attention à lui en retour et de le faire parler de lui, mais Médien reste plutôt vague sur sa vie et ne parle pas beaucoup de ses émotions. La tâche est donc peu aisée, mais Kerme aime aussi juste passer du temps en sa compagnie.',
                iconPath: 'assets/Kerme/newni2.png'
            },
            {
                authorId: 'medien',
                targetId: 'kerme',
                note: 8,
                description: 'Médien sait que Kerme est un ancien soldat et qu\'il en garde des séquelles, c\'est le premier à réagir quand il voit que Kerme souffre de son PTSD. Il est très empathique envers Kerme et l\'apprécie pour son humour et sa façon de mettre les gens autour de lui à l\'aise. Ils communiquent plutôt bien ensemble.',
                iconPath: 'assets/Medien/newni2.png'
            },
        ],
        imagePaths: [
        'assets/00_Relations/KermeMedien/Iruqua.jpg'
        ],
        artists:[
            'Iruqua'
        ]
    }
];