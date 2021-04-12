# react-text-selection-popover

A react component that lets you render a popover in relation to the current text selection. 




## Install

```bash
npm install --save react-text-selection-popover
```

## Usage

```tsx
import css from '@emotion/css'

<Popover
  render={
    ({ clientRect, isCollapsed, textContent }) => {
      if (clientRect == null || isCollapsed) return null

      // I'm using emotion for this example but you can use anything really
      const style = css`
        position: absolute;
        left: ${clientRect.left + clientRect.width / 2}px;
        top: ${clientRect.top - 40}px;
        margin-left: -75px;
        width: 150px;
        background: blue;
        font-size: 0.7em;
        pointer-events: none;
        text-align: center;
        color: white;
        border-radius: 3px;
      `

      return <div className={style}>
        Selecting {(textContent || '').length} characters
      </div>
    }
  }
/>
```

### Props

| name | type | description |
| --- | ---- | --- |
| `render`    | `({ clientRect, isCollapsed, textContent }) => {}` | Render prop for rendering your popover, see above for usage |
| `mount`     | `HTMLElement` | Dom Element that Popover will be rendered into (This component uses [React Portals](https://reactjs.org/docs/portals.html) |
| `target`    | `HTMLElement` | Dom Element which the popover is constrained to |
