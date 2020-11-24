import React, { Component, Suspense } from "react"
import { render } from "react-dom"

import "firebase/database"
import {
  FirebaseAppProvider,
  useFirestoreDocData,
  useFirestore,
} from "reactfire"

import firebaseConfig from "./config/firebase"

function Burrito() {
  // easily access the Firestore library
  const burritoRef = useFirestore().collection("tryreactfire").doc("burrito")

  // subscribe to a document for realtime updates. just one line!
  const data = useFirestoreDocData(burritoRef) as any

  return <pre>{JSON.stringify(data)}</pre>
}

function App() {
  return (
    <FirebaseAppProvider suspense={false} firebaseConfig={firebaseConfig}>
      <Suspense fallback={<p>Loading</p>}>
        <Burrito />
      </Suspense>
    </FirebaseAppProvider>
  )
}
//document.baseURI.slice(0,-1)
export default App
