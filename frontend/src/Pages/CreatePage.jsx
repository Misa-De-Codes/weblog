import React, { useState } from 'react';

const CreatePage = () => {
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    genre: '',
    isPublished: false
  });

  // Confirmation dialog state
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setHasChanges(true);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting post:', formData);
    setFormData({
      title: '',
      body: '',
      genre: '',
      isPublished: false
    });
    setHasChanges(false);
  };

  // Handle cancel button click
  const handleCancel = () => {
    if (hasChanges) {
      setShowConfirmDialog(true);
    } else {
      // Handle navigation away or form close
      //<Link to="/home" ></Link>
      console.log('No changes, closing form');
    }
  };

  // Confirm discard changes
  const confirmDiscard = () => {
    setFormData({
      title: '',
      body: '',
      genre: '',
      isPublished: false
    });
    setHasChanges(false);
    setShowConfirmDialog(false);
    // Handle navigation away or form close
  };

  // Cancel discard changes
  const cancelDiscard = () => {
    setShowConfirmDialog(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="pt-5 min-w-full">
          <input
            className='min-w-full text-xl h-14 focus:outline-0'
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
        </div>

        <div className="form-group">
          <textarea
            id="body"
            name="body"
            className="min-w-full h-70 mb-5 resize-none focus:outline-0"
            value={formData.body}
            onChange={handleChange}
            placeholder="Write your post content here..."
            rows="10"
            required
          />
        </div>

        <div className='mb-5'>
          <label className="" htmlFor="genre">Category</label>
          <select
            id="genre"
            name="genre"
            className="ml-3 p-2 rounded-2xl outline-0 bg-gray-900"
            value={formData.genre}
            onChange={handleChange}
          >
            <option className="bg-gray-900 text-sm" value="">Select a category</option>
            <option className="bg-gray-900 text-sm" value="technology">Technology</option>
            <option className="bg-gray-900 text-sm" value="lifestyle">Lifestyle</option>
            <option className="bg-gray-900 text-sm" value="travel">Travel</option>
            <option className="bg-gray-900 text-sm" value="food">Food</option>
            <option className="bg-gray-900 text-sm" value="personal">Personal</option>
          </select>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <input
              className='w-5 h-5 appearance-none rounded-md border-1 border-gray-700 bg-gray-100 checked:bg-gray-700'
              type="checkbox"
              id="isPublished"
              name="isPublished"
              checked={formData.isPublished}
              onChange={handleChange}
            />
            <label htmlFor="isPublished">Publish</label>
          </div>
          <div className="">
            <button type="submit" className="text-sm p-2 rounded-xl bg-gray-600 mr-3">
              {formData.isPublished ? 'Publish Post' : 'Save Draft'}
            </button>
            <button 
              type="button" 
              className="text-sm p-2 rounded-xl bg-gray-600"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-800 m-14 p-5 rounded-xl max-w-md w-full">
            <h3 className="font-semibold mb-3">Discard Changes?</h3>
            <p className="text-sm mb-5">You have unsaved changes. Are you sure you want to discard them?</p>
            <div className="flex justify-end gap-3">
              <button 
                className="text-sm p-2 rounded-lg bg-gray-700 hover:bg-gray-600"
                onClick={cancelDiscard}
              >
                Continue Editing
              </button>
              <button 
                className="text-sm p-2 rounded-lg bg-red-600 hover:bg-red-700"
                onClick={confirmDiscard}
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePage;