import type { FC } from 'react';
import './MyComponent.css';

const MyComponent: FC = () => {
  return (
    <div className="my-component">
      <h1>Hello from MyComponent!</h1>
      <p>This is a paragraph of text within my component.</p>
    </div>
  );
};

export default MyComponent;
