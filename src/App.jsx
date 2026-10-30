import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <>
<div class="container">
<p><a class="btn btn-link" href="https://getbootstrap.com/docs/5.3/components/buttons/#variants">Variants (btn btn-색상) </a></p>
<p>기본버튼</p>

<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<p><a class="btn btn-link" href="https://getbootstrap.com/docs/5.3/components/buttons/#button-tags">테그에 적용 (btn btn-색상) </a></p>
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input"/>
<input class="btn btn-primary" type="submit" value="Submit"/>
<input class="btn btn-primary" type="reset" value="Reset"/>

<p><a class="btn btn-link" href="https://getbootstrap.com/docs/5.3/components/buttons/#outline-buttons">테두리 btn-outline-색상 </a></p>
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>

<p><a class="btn btn-link" href="https://getbootstrap.com/docs/5.3/components/buttons/#sizes">Sizes </a></p>
<p>크게 btn-lg</p>
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>
<p>작게  btn-sm</p>

<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>

<p><a class="btn btn-link" href="https://getbootstrap.com/docs/5.3/components/buttons/#disabled-state">Disabled state (disabled) </a></p>
<button type="button" class="btn btn-primary" disabled>Primary button</button>
<button type="button" class="btn btn-secondary" disabled>Button</button>
<button type="button" class="btn btn-outline-primary" disabled>Primary button</button>
<button type="button" class="btn btn-outline-secondary" disabled>Button</button>

<a class="btn btn-primary disabled" role="button" aria-disabled="true">Primary link</a>
<a class="btn btn-secondary disabled" role="button" aria-disabled="true">Link</a>


<p><a class="btn btn-link" href="https://getbootstrap.com/docs/5.3/components/buttons/#link-functionality-caveat">Link functionality caveat </a></p>
<a href="#" class="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
<a href="#" class="btn btn-secondary disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>

<p><a class="btn btn-link"  href="https://getbootstrap.com/docs/5.3/components/buttons/#block-buttons">Block buttons (d-grid gap-2)</a></p>
<div class="d-grid gap-2">
<button class="btn btn-primary" type="button">Button</button>
<button class="btn btn-primary" type="button">Button</button>
</div>

</div>
    </>
  )
}

export default App
