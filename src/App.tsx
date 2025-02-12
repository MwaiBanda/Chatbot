import './App.css'


type Option = {
  id: number
  name: string
  type: OptionType
}

enum OptionType {
  Departments = 'Departments',
  Courses = 'Courses',
  Locations = 'Locations',
  Admissions = 'Admissions',
  Contact = 'Contact',
  AboutUs = 'About Us',
}

function App() {
  const options: Option[] = [
    { id: 1, name: 'Departments', type: OptionType.Departments },
    { id: 2, name: 'Courses', type: OptionType.Courses },
    { id: 3, name: 'Locations', type: OptionType.Locations },
    { id: 4, name: 'Admssions', type: OptionType.Admissions },
    { id: 5, name: 'Contact', type: OptionType.Contact },
    { id: 6, name: 'About Us',  type: OptionType.AboutUs },
  ]
  return (
    <>
      <div className='card'>
       <div className="header">
        <p className="title">Ivy Tech Community College</p>
       </div>
       <hr className="solid"/>
       <div className="content">
        <div className="content-container">
        <div className="response">
            Hello 👋🏾
          </div>
        </div>
      
       </div>
       <div className="options">
        {options.map((option) => {
          return <div className="tab">
            <div className="tab-name">
              {option.name}
            </div>
          </div>
        })}
       </div>
      </div>
    </>
  )
}

export default App
