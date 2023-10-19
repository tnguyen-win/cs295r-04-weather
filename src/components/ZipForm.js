import { useState } from 'react';

const ZipForm = ({ onSubmit }) => {
    const [zipCode, setZipCode] = useState('');
    const handleChange = event => setZipCode(event.target.value);
    const handleSubmit = event => {
        event.preventDefault();

        onSubmit(zipCode);
    };

    return (
        <div className='mb-5'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='zipcode'>Enter a U.S. ZIP code</label>
                    <input id='zipcode' className='form-control my-3' type='input' name='zipcode' value={zipCode} onChange={handleChange} required />
                    <button className='btn btn-success' type='submit'>Get forcast</button>
                </div>
            </form>
        </div>
    );
};

export default ZipForm;
