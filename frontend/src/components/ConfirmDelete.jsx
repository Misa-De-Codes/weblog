import React from 'react'

function ConfirmDelete() {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-xl max-w-md w-full">
                <h3 className="text-xl font-semibold mb-3">Discard Changes?</h3>
                <p className="mb-5">You have unsaved changes. Are you sure you want to discard them?</p>
                <div className="flex justify-end gap-3">
                    <button
                        className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600"
                        onClick={cancelDiscard}
                    >
                        Continue Editing
                    </button>
                    <button
                        className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700"
                        onClick={confirmDiscard}
                    >
                        Discard
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDelete