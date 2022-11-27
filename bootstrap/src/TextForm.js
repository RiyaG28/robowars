import React from 'react'

export default function TextForm() {
  return (
    <div><form className='pa10'>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Enter text</label>
      <input type="text" className="form-control" id="exampleInputEmail1" height={200}/>
    
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form></div>
  )
}

