import React from 'react';

export function valueToSelectOption(ary){
  return ary.map((e) =>{
    return {
      key: e,
      value: e,
      text: e ==''? '-none-':e
    }
  })
}

export default function Info ({ msg }) {
  return <div>
  {msg}
  </div>
}
