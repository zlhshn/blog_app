import React from 'react'

const Comments = () => {
  return (
    <div>
      <div className="flex">
        <img
          alt="Man"
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="font-great text-xl">Cyrano de Bergerac</p>
          <h5 className="font-great text-lg ml-2 text-gray-500">12/05/2016</h5>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatem quas saepe nisi nesciunt explicabo fugit illum voluptas, hic inventore!</p>
    </div>
  )
}

export default Comments