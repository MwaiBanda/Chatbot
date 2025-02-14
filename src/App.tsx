import React, { useEffect } from 'react'
import './App.css'
import clsx from 'clsx'
import { Flow, Response, ResponseType } from "./utils/types"
import { OptionsController } from './OptionsController'
import { Player } from '@lottiefiles/react-lottie-player';

function App() {
  const [responses, setResponses] = React.useState<Response[]>(
    [
      { id: 1, text: ['Hello 👋🏾', 'How are you doing today?'], type: ResponseType.Response },
      { id: 2, text: ['What brings you to Ivy Tech today? 😊'], type: ResponseType.Response },
    ]
  )
  const [flow, setFlow] = React.useState<Flow>(Flow.Welcome)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  useEffect(() => {
    document.getElementById(`${responses[responses.length - 1].id}`)?.scrollIntoView()
  }, [responses])
  useEffect(() => {
    if (isLoading) {
      document.getElementById("animation")?.scrollIntoView()
    }
  }, [isLoading])
  return (
    <>
      <div className='card'>
        <div className="header">
          <p className="title">Ivy Tech Community College</p>
        </div>
        <div className="content">
          <div className="content-container">
            {responses.map((response, i) => {
              return <div key={response.id} style={{ marginTop: i === 0 ? "10px" : "" }} id={`${response.id}`} className={clsx("message", response.type.toLowerCase())}>
                <div className="text">
                  {response.text.map((text, index) => {
                    return <span>{text} {index !== response.text.length - 1 && <br />}</span>
                  })}
                  <span>{response.url && <a href={response.url} target="_blank" rel="noreferrer">View more...</a>}</span>
                </div>
              </div>
            })}
            {isLoading && <div id="animation" className={clsx("message", "loading")}>
              <Player
                autoplay={true}
                loop={true}
                speed={1}
                src={"https://lottie.host/822eb09d-4afd-400b-b0e2-525e5aa9fcf2/eM38PS1KBy.json"}
                style={{ height: '40px', width: '30%', marginLeft: '0px' }}
              ></Player>
            </div>}
          </div>
        </div>
        <OptionsController
          flow={flow}
          responses={responses}
          setFlow={setFlow}
          setResponses={setResponses}
          setLoading={setIsLoading}
        />
      </div>
    </>
  )
}





export default App
