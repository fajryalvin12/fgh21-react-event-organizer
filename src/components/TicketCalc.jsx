import React from "react";
import { useSelector } from "react-redux";

function TicketCalc () {
    const section = useSelector((state) => state.event.section)
    const ticket = useSelector((state) => state.section.qty)
    
    function calcQuantity (){
        if (!ticket) return 0;
        return Object.values(ticket).reduce(
            (total, qty) => total + qty,
            0 
        )
    }

    const submitQuantity = calcQuantity()

    return finish
}

export default TicketCalc