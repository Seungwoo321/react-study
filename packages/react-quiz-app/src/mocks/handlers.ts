import { HttpResponse, http } from 'msw'
import { questions } from './data'
import { shuffleArray } from '../utils'
// request, params, cookies
const fetchQuizQuestions = <T extends { request: any, params: any, cookies: any}>(ctx: T) => {
  const url = new URL(ctx.request.url)
  const amount = Number(url.searchParams.get('amount') || 0)
  const difficulty= url.searchParams.get('difficulty')
  const type = url.searchParams.get('type')
  const results = shuffleArray(questions).filter(question => question.difficulty === difficulty && question.type === type).slice(0, amount)
  return HttpResponse.json({
    results
  })
}

export const handlers = [
  http.get(`/api/v1/questions`, fetchQuizQuestions)
]
