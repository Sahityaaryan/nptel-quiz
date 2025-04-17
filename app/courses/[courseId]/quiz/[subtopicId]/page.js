

import { getQuizBySubtopicId, getSubtopicBySubtopicId } from '@/app/lib/actions';
import Quiz from '@/components/quiz/Quiz';
// import { UserProvider } from '@/helpers/context/UserContext';
// import { QuizProvider } from '@/helpers/context/QuizContext';

export default async function QuizInterface({ params }) {
  
  const { subtopicId } = await params;
  const quiz = await getQuizBySubtopicId(subtopicId);

  const questions = JSON.parse(quiz.questions);
  const subtopic = await getSubtopicBySubtopicId(subtopicId);

  return (

    // <QuizProvider quiz={quiz}>
    //   <UserProvider>
        <Quiz questions={questions} quiz={quiz} subtopic={subtopic.title} />
    //   </UserProvider>
    // </QuizProvider>
  );
}