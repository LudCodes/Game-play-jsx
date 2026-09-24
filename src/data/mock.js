export const user = {
  firstName: 'Tiago',
  avatar: require('@/assets/images/avatar.png'),
};

const guilds = {
  lendarios: {
    id: '1',
    name: 'Lendários',
    game: 'League of Legends',
    image: require('@/assets/images/guild-lol.jpg'),
    owner: true,
  },
  yeahBoy: {
    id: '2',
    name: 'Yeah, boy',
    game: 'Red Dead Redemption 2',
    image: require('@/assets/images/guild-rdr.jpg'),
    owner: false,
  },
  rumoAoTopo: {
    id: '3',
    name: 'Rumo ao topo',
    game: 'CS:GO',
    image: require('@/assets/images/guild-csgo.jpg'),
    owner: true,
  },
  boraQueimarTudo: {
    id: '4',
    name: 'Bora queimar tudo',
    game: 'Apex Legends',
    image: require('@/assets/images/guild-apex.jpg'),
    owner: true,
  },
  valorosos: {
    id: '5',
    name: 'Valorosos',
    game: 'Valorant',
    image: require('@/assets/images/guild-valorant.jpg'),
    owner: true,
  },
  rolezaoMonstro: {
    id: '6',
    name: 'Rolezão Monstro',
    game: 'GTA V',
    image: require('@/assets/images/guild-gta.jpg'),
    owner: false,
  },
};

export const appointments = [
  {
    id: '1',
    guild: guilds.lendarios,
    category: '1',
    date: '18/06 às 21:00h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  },
  {
    id: '2',
    guild: guilds.yeahBoy,
    category: '3',
    date: '23/06 às 19:00h',
    description: 'Bora explorar o mapa inteiro e fazer todas as missões secundárias',
  },
  {
    id: '3',
    guild: guilds.rumoAoTopo,
    category: '2',
    date: '20/06 às 09:00h',
    description: 'Duelo valendo a vaga no time principal do campeonato',
  },
  {
    id: '4',
    guild: guilds.boraQueimarTudo,
    category: '1',
    date: '20/06 às 14:20h',
    description: 'Subindo de elo sem medo, só vitória hoje',
  },
  {
    id: '5',
    guild: guilds.valorosos,
    category: '3',
    date: '18/06 às 21:00h',
    description: 'Partida descompromissada com a galera',
  },
  {
    id: '6',
    guild: guilds.rolezaoMonstro,
    category: '4',
    date: '25/06 às 22:00h',
    description: 'Treino de pilotagem para as corridas de sexta',
  },
];

export const members = [
  {
    id: '1',
    username: 'Tiago Luchtenberg',
    avatar: require('@/assets/images/member-tiago.jpg'),
    status: 'online',
  },
  {
    id: '2',
    username: 'Rodrigo Gonçalves',
    avatar: require('@/assets/images/member-rodrigo.jpg'),
    status: 'busy',
  },
  {
    id: '3',
    username: 'Diego Fernandes',
    avatar: require('@/assets/images/member-diego.jpg'),
    status: 'busy',
  },
];

export const selectedGuild = guilds.valorosos;
