import React from 'react'
import Temp from './tempBook'
import book1 from '../assect/periyarr.jpg'
import book2 from './../assect/8.jpg'
import book3 from './../assect/3.jpg'
import book4 from './../assect/7.jpg'
import book5 from './../assect/2.jpg'
import book6 from './../assect/6.jpg'
import book7 from './../assect/4.jpg'
import book8 from './../assect/5.jpg'


export default function bookCotent(props) {

    const BookContent = [
        { image: book1, title: 'Pen En Adimaiyanal', author: ' Periyar' },
        { image: book2, title: 'Celmugam', author: ' Jeyamohan' },
        { image: book3, title: 'Na.muthukumar kavithaikal', author: ' Na.Muthukuma' },
        { image: book4, title: 'Yaen Periyar', author: ' Kizhakku' },
        { image: book5, title: 'Tamilaga Arasiyal Varalaru', author: 'R. Muthukumar ' },
        { image: book6, title: 'Yaanai Doctor', author: 'Jeyamohan' },
        { image: book7, title: 'INDIYAAVIL SAATHIKAL', author: 'Dr. B.R. AMBEDKAR' },
        { image: book8, title: 'Gopalla Graamam', author: ' Jeyakanthan' }
    ]
    return (
        <Temp BookContent={BookContent} />
    )
}
