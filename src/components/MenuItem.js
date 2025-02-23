import React from 'react';
import { useState } from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ imageName, title, description, price, count, onAdd, onSubtract }) => {
    
    return (
        <div>
            <div class="row">
                
                <div class="col-3">
                    <img src={imageName} alt="menu item" class="itemImage"/>
                </div>

                <div class="col-6">
                    <p class="pTitle">{title}</p>
                    <p class="pSmall">{description}</p>
                </div>

                <div class="col-3">
                    
                    <div class="row">
                        <p>${price}</p>
                    </div>

                    <br></br>

                    <div class="row">
                        <div class="col-4">
                            <button type="button" 
                                class="addButton" 
                                onClick={onAdd}> + 
                            </button>
                        </div>
                        <div class="col-4">
                            <p class="pCount">{count}</p>
                        </div>
                        <div class="col-4">
                            <button type="button" 
                                class="addButton" 
                                onClick={onSubtract}
                                disabled={count <= 0}> - 
                            </button>
                        </div>
                        
                    </div>
                </div>

            </div>

            <br></br>

        </div>
    );
};

export default MenuItem;
