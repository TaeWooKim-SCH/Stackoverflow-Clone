export const QuestionsData = {
  pageInfo: {
    page: '페이지 번호',
    totalElements: 5132,
    totalPages: '총 페이지 수',
  },
  results: [
    {
      id: 1,
      title: 'android ndk gdb loaded sharedlibraries missing *.oat',
      content: 'But oat files are loaded when debugging other devices like Huawei (FRD-AL00). Following is an excerpt of the output of show shared on such a device.',
      createAt: '1시 20분',
      tags: [
        'python',
        'javascript',
      ],
      userInfo: {
        id: 2,
        userImage: '유저 이미지',
        userName: '김태우',
      },
      votes: 2,
      answerCount: 2,
    },
    {
      id: 2,
      title: 'android ndk gdb loaded sharedlibraries missing *.oat',
      content: 'But oat files are loaded when debugging other devices like Huawei (FRD-AL00). Following is an excerpt of the output of show shared on such a device.',
      createAt: '1시 20분',
      tags: [
        'python',
        'javascript',
      ],
      userInfo: {
        id: '유저 코드',
        userImage: '유저 이미지',
        userName: '김태우',
      },
      votes: 2,
      answerCount: 2,
    },
    {
      id: 3,
      title: 'android ndk gdb loaded sharedlibraries missing *.oat',
      content: 'But oat files are loaded when debugging other devices like Huawei (FRD-AL00). Following is an excerpt of the output of show shared on such a device.',
      createAt: '1시 20분',
      tags: [
        'python',
        'javascript',
      ],
      userInfo: {
        id: '유저 코드',
        userImage: '유저 이미지',
        userName: '김태우',
      },
      votes: 2,
      answerCount: 2,
    },
    {
      id: 4,
      title: 'android ndk gdb loaded sharedlibraries missing *.oat',
      content: 'But oat files are loaded when debugging other devices like Huawei (FRD-AL00). Following is an excerpt of the output of show shared on such a device.',
      createAt: '1시 20분',
      tags: [
        'python',
        'javascript',
      ],
      userInfo: {
        id: '유저 코드',
        userImage: '유저 이미지',
        userName: '김태우',
      },
      votes: 2,
      answerCount: 2,
    },
  ],
};

export const QuestionsDetailData = {
  id: '해당 글 아이디',
  title: '제목',
  content: '내용',
  createAt: '질문 작성 날짜',
  tags: [
    'python',
    'javascript',
  ],
  userInfo: {
    id: '유저 코드',
    userImage: '유저 이미지',
    userName: '유저 이름',
  },
  votes: '투표수',
  answers: {
    answerCount: '해당 글에 대한 답변 갯수',
    answerList: [
      {
        answerContent: '답변 내용1',
        answerVotes: '답변에 대한 투표 수',
        answerUserInfo: {
          userImage: '유저 이미지',
          userName: '유저 이름',
        },
      },
      {
        answerContent: '답변 내용2',
        answerVotes: '답변에 대한 투표 수',
        answerUserInfo: {
          id: '유저 코드',
          userImage: '유저 이미지',
          userName: '유저 이름',
        },
      },
    ],
  },
};
