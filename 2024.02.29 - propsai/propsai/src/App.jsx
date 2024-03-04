import Button from './components/button/Button.jsx'
import icon from './assets/icon.svg';
import Card from './components/button/card/Card.jsx';
import './App.css'

function App() {
  const data = [
    {
      title: 'Instant Server Start',
      content: 'On demand file serving over native ESM, no bundling required!'
    },
    {
      title: 'Lightning Fast HMR',
      content: 'Hot Module Replacement (HMR) that stays fast regardless of app size.'
    },
    {
      title: 'Rich Features',
      content: 'Out-of-the-box support for TypeScript, JSX, CSS and more.'
    },
    {
      title: 'Optimized Build',
      content: 'Pre-configured Rollup build with multi-page and library mode support.'
    },
    {
      title: 'Universal Plugins',
      content: 'Rollup-superset plugin interface shared between dev and build.'
    },
    {
      title: 'Fully Typed APIs',
      content: 'Flexible programmatic APIs with full TypeScript typing.'
    }
  ];

  return (
    <>
      <div className="buttons">
        <Button
          text="Get Started"
          style="active" />
        <Button
          text="Why Vite?" />
        <Button
          text="View on Github" />
        <Button
          text="ViteConf23!"
          style="active"
          showIcon={true}
        />
        <Button>
          <img src={icon} />
          <span>Pirkti skrydziu bilietus</span>
        </Button>
      </div>
      <div className="cards">
        {data.map((value, index) =>
          <Card key={index} data={value} />
        )}
      </div>
    </>
  )
}

export default App
