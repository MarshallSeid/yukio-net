import React from "react"
import '../styles/global.css'

export default function Gallery() {
  return (
    <div id="gallery-container">
	    <header>
		    <h1>Marshall Seid</h1>
        <p id="bio">b. 1995, California</p>
      </header>
          <main>
              <a className="gallery-title">marshall</a>
        <ol id="projects">
          <li>
            <ul id="eridanus">
              <li className="gallery-title">
                <span className="gallery-title">1&thinsp;&mdash;&thinsp;</span><em>Eridanus</em>&nbsp;(2017)
              </li>
              <li className="medium">DGalleryigital slide projection, altered city map of Paris, keys. Borrowing a site from David Horowitz</li>
              <li className="gallery-title">hello there</li>
            </ul>
          </li>
        </ol>
      </main>
    </div>
  )
}


