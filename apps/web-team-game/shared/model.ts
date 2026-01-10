export const QNAs = [
  {
    question: '54 + 65 = ?',
    answer: '119',
    answers: ['118', '120', '121', '119'],
  },
  {
    question: '12 * 13 = ?',
    answer: '156',
    answers: ['154', '155', '156', '157'],
  },
  {
    question: '20 - 8 = ?',
    answer: '12',
    answers: ['10', '11', '12', '13'],
  },
  {
    question: '100 / 4 = ?',
    answer: '25',
    answers: ['20', '22', '25', '30'],
  },
  {
    question: '15 + 27 = ?',
    answer: '42',
    answers: ['40', '41', '42', '43'],
  },
] as const

export type QNA = (typeof QNAs)[number]
