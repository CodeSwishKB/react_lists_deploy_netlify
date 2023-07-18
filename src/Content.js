import React from "react"
import ItemList from "./ItemList"
const Content = ({ items, handleCheck, handleDelele }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelele={handleDelele}
        />
      ) : (
        <p
          style={{
            marginTop: "2rem",
            color: "red",
          }}
        >
          Your List is empty
        </p>
      )}
    </main>
  )
}

export default Content
