export class ChatFakeData {
  public static profileUser = {
    id: 11,
    avatar: 'assets/images/portrait/small/avatar-s-11.jpg',
    fullName: 'Teste 1',
    role: 'admin',
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: 'online',
    settings: {
      isTwoStepAuthVerificationEnabled: true,
      isNotificationsOn: false,
    },
  };
  public static contacts = [
    {
      id: 1,
      fullName: 'Teste 2',
      role: 'Cliente 1',
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      avatar: 'assets/images/avatars/1.png',
      status: 'offline',
    },
    {
      id: 2,
      fullName: 'Teste 3',
      role: 'Cliente 3',
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      avatar: 'assets/images/avatars/2.png',
      status: 'ocupado',
    },
    {
      id: 3,
      fullName: 'Teste 4',
      role: 'Cliente 4',
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      avatar: 'assets/images/avatars/3.png',
      status: 'ocupado',
    },
    {
      id: 4,
      fullName: 'Teste 5',
      role: 'Cliente 5',
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      avatar: 'assets/images/avatars/4.png',
      status: 'online',
    },
    {
      id: 5,
      fullName: 'Teste 6',
      role: 'Cliente 6',
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      avatar: 'assets/images/avatars/5.png',
      status: 'ocupado',
    },
    {
      id: 6,
      fullName: 'Teste 7',
      role: 'Cliente 7',
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      avatar: 'assets/images/avatars/6.png',
      status: 'online',
    },
    {
      id: 7,
      fullName: 'Teste 8',
      role: 'Cliente 8',
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      avatar: 'assets/images/avatars/7.png',
      status: 'online',
    },
  ];

  public static chats = [
    {
      id: 1,
      userId: 2,
      unseenMsgs: 1,
      chat: [
        {
          message:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          time: 'Dom Fev 13 2022 07:45:00 GMT+0000 (GMT)',
          senderId: 11,
        },
        {
          message:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          time: 'Dom Fev 13 2022 07:45:00 GMT+0000 (GMT)',
          senderId: 2,
        },
        {
          message:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          time: 'Dom Fev 13 2022 07:45:00 GMT+0000 (GMT)',
          senderId: 11,
        },
        {
          message:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          time: 'Dom Fev 13 2022 07:45:00 GMT+0000 (GMT)',
          senderId: 2,
        },
        {
          message:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          time: 'Dom Fev 13 2022 07:45:00 GMT+0000 (GMT)',
          senderId: 2,
        },
        {
          message:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          time: 'Dom Fev 13 2022 07:45:00 GMT+0000 (GMT)',
          senderId: 11,
        },
      ],
    },
    {
      id: 2,
      userId: 1,
      unseenMsgs: 0,
      chat: [
        {
          message:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          time: 'Dom Fev 13 2022 07:45:00 GMT+0000 (GMT)',
          senderId: 11,
        },
        {
          message:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          time: 'Dom Fev 13 2022 07:45:00 GMT+0000 (GMT)',
          senderId: 1,
        },
        {
          message:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          time: 'Dom Fev 13 2022 07:45:00 GMT+0000 (GMT)',
          senderId: 1,
        },
        {
          message:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          time: 'Dom Fev 13 2022 07:45:00 GMT+0000 (GMT)',
          senderId: 11,
        },
        {
          message:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          time: 'Dom Fev 13 2022 07:45:00 GMT+0000 (GMT)',
          senderId: 11,
        },
        {
          message:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          time: 'Dom Fev 13 2022 07:45:00 GMT+0000 (GMT)',
          senderId: 1,
        },
        {
          message:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          time: 'Dom Fev 13 2022 07:45:00 GMT+0000 (GMT)',
          senderId: 1,
        },
        {
          message:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          time: 'Dom Fev 13 2022 07:45:00 GMT+0000 (GMT)',
          senderId: 1,
        },
        {
          message:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          time: 'Dom Fev 13 2022 07:45:00 GMT+0000 (GMT)',
          senderId: 11,
        },
        {
          message:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
          time: 'Dom Fev 13 2022 07:45:00 GMT+0000 (GMT)',
          senderId: 1,
        },
      ],
    },
  ];
}
