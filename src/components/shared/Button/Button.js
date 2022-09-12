import {BaseButton,AddBtn,RemoveBtn} from "./Button.styles"

export const Button_TYPE_CLASS = {
    base:"base",
    add:"add",
    remove:"remove",
}
const getButton = (buttonType = Button_TYPE_CLASS.base)=>(
  {
  [Button_TYPE_CLASS.base] : BaseButton,
  [Button_TYPE_CLASS.add] : AddBtn,
  [Button_TYPE_CLASS.remove] : RemoveBtn,
}[buttonType]
)

export default function Button({children,buttonType,...otherprops}) {
  const CustomButton =getButton(buttonType)
  return (
   <CustomButton {...otherprops}  >
    { children}
   </CustomButton>
  )
}