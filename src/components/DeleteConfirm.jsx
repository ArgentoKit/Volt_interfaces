import { Dialog, DialogActions, DialogTitle } from '@material-ui/core';
import React from 'react'


const DeleteCofirm = ({open, element, handleClose, handleDeleteConfirm}) => {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Вы уверены что хотите удалить это?"}</DialogTitle>
                <DialogActions>
                    <button onClick={ handleClose }>Disagree</button>
                    <button onClick={() => handleDeleteConfirm(element)} autoFocus>Agree</button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default DeleteCofirm