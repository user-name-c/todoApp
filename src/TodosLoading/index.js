import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
    return(
    // <div className="LoadingTodo-container">
    //     <span className="LoadingTodo-completeIcon"></span>
    //     <p className="LoadingTodo-text"></p>
    //     <span className="LoadingTodo-deleteIcon"></span>
    // </div>
    <div className="loading-container">
        <div className="loading-circle"></div>
        <div className="loading-bar"></div>
        <div className="loading-circle"></div>
    </div>
    );
}

export { TodosLoading };