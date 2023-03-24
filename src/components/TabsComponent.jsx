import React, { useState } from 'react'
import Skills from './Skills';

function TabsComponent() {
  const [option, setOption] = useState('aboutme')

  const data = [
    {
      label: "About me",
      value: "aboutme",
    },
    {
      label: "Skills",
      value: "skills",
    },
    {
      label: "Projects",
      value: "projects",
    },
    {
      label: "Carrera",
      value: "carrera",
    },
  ];

  function renderSwitch(option) {
    switch (option) {
      case 'aboutme':
        return `Hola! ME llamo Maria ✋🏻 `;
      case 'skills':
        return <Skills />;
      case 'projects':
        return 'projects';
      case 'carrera':
        return 'Carrera';
      default:
        return `Default`;
    }
  }

  return (
    <>
      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
          {data.map(({ label, value }) => (
            <>
              <li key={value} class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab"
                  type="button" 
                  role="tab"
                  onClick={() => setOption(value)}
                  aria-controls="dashboard"
                  aria-selected="false">
                  {label}
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>
      {renderSwitch(option)}
    </>
  )
}

export default TabsComponent