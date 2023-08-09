// import Button from 'react-bootstrap/Button';
import './App.css'
import Cart from './cart.jsx'

function App() {
  return (
    <div className='w-100 h-100 d-flex align-items-center'>
      <div className='w-100 h-auto d-flex justify-content-center column-gap-3 ps-5 pe-5'>
        <Cart
        img="https://statics.basalam.com/public/users/w0xLlP/04-25/3xpRxcZ7TwA7lErLRwJY0gUoKVZrYwPIwPyAu9M5882cugP9O3.jpg_512X512X70.jpg" 
        Paragraf="تیشرت مردانه" 
        Location="کرج | پوشاک ملومیس"
        View="4.5 (141نظر)"
        OriginalPrice="45,000"
        Discount="11%"
        Price="40,000"
        />
        <Cart
        img="https://statics.basalam.com/public-10/users/J37ww/08-04/mKpvAC9ix7IoT8TJN1hKanzg57AQ7cfWUMlkeJxQMqwrYDSJpE.jpg_512X512X70.jpg" 
        Paragraf="پیراهن آستین کوتاه مردانه کتان سنگشور دو جیب" 
        Location="پیشوا | تنپوش اهورا"
        View=""
        OriginalPrice="380,000"
        Discount="9%"
        Price="345,000"
        />
        <Cart
        img="https://statics.basalam.com/public-4/users/2rb67/04-16/tlM3T1VrdLtWOINjmH0qICJHR7TFHlfa53GaZAV0buheL6hIar.jpg_512X512X70.jpg" 
        Paragraf="کفش فوتبال استوک ریز . چمن مصنوعی" 
        Location="کرج | کفش ورزشی ایمان"
        View="4.4 (110نظر)"
        OriginalPrice=""
        Discount=""
        Price="280,000"
        />
        <Cart
        img="https://statics.basalam.com/public/users/PglgW/2109/Kh6a8ZLBF2CcagmNDR0g3feBnn3CLTwoAOrhXhtq.jpg_256X256X70.jpg" 
        Paragraf="شلوار اسلش مردانه جنس فلامت جنس عالی لارج و ایکس لارج و ... " 
        Location="تهران | پوشاک لوکس ارسال رایگان"
        View="4.4 (91نظر)"
        OriginalPrice="465,000"
        Discount="12%"
        Price="410,000"
        />
        <Cart
        img="https://statics.basalam.com/public-3/users/1qZyQ7/12-05/Tg94EZY63y6LumAZziAANSukIzBWDwrt4fsLUwvI08QQaCv34O.jpg_512X512X70.jpg" 
        Paragraf="کفش ایمنی چرم طبیعی پنجه آهنی درجه یک" 
        Location="نجف آباد | کفش فروشی احمد"
        View="4 (18نظر)"
        OriginalPrice="600,000"
        Discount="67%"
        Price="200,000"
        />
        <Cart
        img="https://statics.basalam.com/public-10/users/VLkL0/07-19/hh5DR7ZPjHhfRfRJDuvPqoo8TfAB1SFEdu91hKz7BxhGdNqqPl.jpg_512X512X70.jpg" 
        Paragraf="چتر کلاهی مخصوص پیاده روی . کوه نوردی" 
        Location="تهران | گالری بابای حنا"
        View="4.8 (12نظر)"
        OriginalPrice="250,000"
        Discount="40%"
        Price="150,000"
        />
      </div>
    </div>      
  )
}

export default App
