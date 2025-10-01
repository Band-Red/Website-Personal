export default function BtnIcon({titleBtn, nameBtn, typeBtn, children}) {
  return (
    <button title={titleBtn} type={typeBtn} id={`btn-${nameBtn}`}>
      {children}
    </button>
  )
}
