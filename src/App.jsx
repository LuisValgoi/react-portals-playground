import Modal from './Modal';
import { useState } from 'react';

function App() {
  const [shown, setShown] = useState(false);

  return (
    <div
      style={{
        height: '100%',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: 400,
          position: 'relative',
        }}
      >
        <h1>
          My App
        </h1>

        <p>
          This is an example of how you might use React.createPortal. I think
          it is a pretty neat API that is yet another awesome escape hatch
          that React provides for practical reasons. Sometimes you just need
          to render something completely outside the React Tree.
        </p>


        <button onClick={() => setShown(true)}>
          Show Secret Modal
        </button>

        {shown && (
          <Modal onClose={() => setShown(false)}>
            This is the Modal's Content
          </Modal>
        )}
      </div>
    </div>
  )
}

export default App
