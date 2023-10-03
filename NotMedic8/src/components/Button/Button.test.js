import { render, fireEvent, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Button  from "./Button";

describe('Button', () => {
    test('We have button?', () => {
     const text = 'add to card'
        render(<Button text={text} />)
        expect(screen.getByText("add to card")).toBeInTheDocument()
    })
    test('ClassName in button', () => {
        const className = "btn"
        render(<Button className={className} />)
        expect(screen.getByRole("button")).toHaveClass('btn')
    })
    test('PropsType in button', () => {
        const text = 'Checkout'
        render(<Button type="submit" text={text}/>)
        expect(screen.getByText('Checkout')).toHaveAttribute("type", "submit")
    })
    test('AddFavorite click', () => {
        const addFavorite = jest.fn()
        const { container } = render(<Button className={'btn'} onClick={addFavorite}/>)
        const button = container.firstChild
        fireEvent.click(button)
        expect(addFavorite).toHaveBeenCalled()
    })
})

