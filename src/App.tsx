import React, { useEffect } from 'react'
import './App.css'
import clsx from 'clsx'
import { Flow, Response, ResponseType } from "./types/types"
import { OptionsController } from './OptionsController'

function App() {
  const [responses, setResponses] = React.useState<Response[]>(
    [
      {id: 1, text: ['Hello 👋🏾', 'How are you doing today?'], type: ResponseType.Response},
      {id: 2, text: ['What brings you to Ivy Tech today? 😊'], type: ResponseType.Response},
    ]
  )
  const [flow, setFlow] = React.useState<Flow>(Flow.Welcome)

  useEffect(() => {
    document.getElementById(`${responses[responses.length - 1].id}`)?.scrollIntoView()
  }, [responses])
  return (
    <>
      <div className='card'>
       <div className="header">
        <p className="title">Ivy Tech Community College</p>
       </div>
       <div className="content">
        <div className="content-container">
        {responses.map(response => {
           return <div key={response.id} id={`${response.id}`} className={clsx("message", response.type.toLowerCase())}>
            <div className="text">
              {response.text.map((text, index) => {
                  return <span>{text} {index !== response.text.length - 1 && <br/>}</span>
              })}
              <span>{response.url && <a href={response.url} target="_blank" rel="noreferrer">View more</a>}</span>
            </div>
         </div>
        })}
        </div>
       </div>
        <OptionsController 
          flow={flow} 
          responses={responses}
          setFlow={setFlow} 
          setResponses={setResponses}
        />
      </div>
    </>
  )
}





export default App
