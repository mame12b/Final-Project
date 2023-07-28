import { useState, useEffect } from 'react';

const MyComponent = () => {
  const [shareholders, setShareholders] = useState([
   
  ]);
  const [totalProfit, setTotalProfit] = useState(0);
  const [totalShares, setTotalShares] = useState(0);
  const [newShareholder, setNewShareholder] = useState({
    name: '',
    shares: '',
  });

  // Recalculate the total shares when the shareholders array changes
  useEffect(() => {
    const newTotalShares = shareholders.reduce((acc, shareholder) => acc + shareholder.shares, 0);
    setTotalShares(newTotalShares);
  }, [shareholders]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newId = shareholders.length + 1;
    const newShareholderWithId = { ...newShareholder, id: newId };
    setShareholders([...shareholders, newShareholderWithId]);
    setNewShareholder({ name: '', shares: '' });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'shares') {
      const newShareholders = shareholders.map((shareholder) => {
        if (shareholder.id === parseInt(event.target.dataset.id)) {
          return { ...shareholder, shares: parseInt(value) };
        } else {
          return shareholder;
        }
      });
      setShareholders(newShareholders);
    } else {
      setNewShareholder({ ...newShareholder, [name]: value });
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <form onSubmit={handleFormSubmit} className="flex flex-col space-y-4">
    <div>
    <label htmlFor="Total-profit">Total Profit:</label>
    <input type="number" value="profit" id='profit' placeholder='total-profit' required />
    
    </div>
    <div>
    <label htmlFor="Total-profit">Total Share Amount:</label>
    <input type="number" value="pshareamount" id='shareamount' placeholder='share-amount' required />
    
    </div>
    <div className='flex gap-4'>
      <div><button className='bg-red-400'>divide</button></div>
      <div><button className='bg-blue-400'>update</button></div>
    </div>
    </form>
      </div>
    </div>
  );
};
export default MyComponent;