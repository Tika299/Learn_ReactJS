import { useEffect, useState } from 'react';

const lessons = [
    {
        id: 1,
        name: "HTML/CSS"
    },
    {
        id: 2,
        name: "JavaScript"
    },
    {
        id: 3,
        name: "ReactJS"
    }
]

function FakeChat() {
    const [lessonId, setlessonId] = useState(1);

    useEffect(() => {

        const handleComment = ({ detail }) => {
            console.log(detail);
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment);
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        }
    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map((lesson) => {
                    return <li
                        key={lesson.id}
                        style={{
                            color: lessonId == lesson.id ?
                                'red' :
                                '#333'
                        }}
                        onClick={() => setlessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default FakeChat;