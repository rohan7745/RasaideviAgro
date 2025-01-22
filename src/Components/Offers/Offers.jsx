import React from 'react'
import './Offers.css'

const Offers = () => {
    return (
        <div className='offers '>
            <div className="container card p-3">
                <h3 className='card-header text-center'>गावरान अंडी उत्पादन व्यवसाय सुरु करण्याची सुवर्णसंधी</h3>
                <div className="card-body">
                    <h4 className='bulletPointsTitle'>योजनेची वैशिष्टे <span className='star'>*</span></h4>
                    <p className='bulletPoints'>कंपनीकडून १ महिन्याची लसीकरण झालेली तलंगा.</p>
                    <p className='bulletPoints'>विकत घेतलेल्या अंडयांचे मार्केटींग कंपनी करणार.</p>
                    <p className='bulletPoints'>कंपनीच्या प्रशिक्षीत लोकांची वेळोवेळी भेट व मार्गदर्शन.</p>
                    <p className='bulletPoints'>शेतकऱ्यांकडील उत्पादीत अंडी खरेदीची हमी.</p>
                    <p className='bulletPoints'>अंडी उत्पादनासाठी प्रशिक्षण.</p>
                    <p className='bulletPoints'>खाद्य, लस, औषधे उपलब्धता.</p>
                    <p className='bulletPoints'>मार्केटींगचे टेन्शन नाही.</p>
                </div>
            </div>
        </div>
    )
}

export default Offers