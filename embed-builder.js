// Embed Builder JavaScript

// Page load fade-in effect
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.15)';
            navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.1)';
            navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
        }
    }
});

// Embed Builder Elements
const embedColor = document.getElementById('embedColor');
const colorHex = document.getElementById('colorHex');
const embedUrl = document.getElementById('embedUrl');
const embedTitle = document.getElementById('embedTitle');
const embedDescription = document.getElementById('embedDescription');
const authorName = document.getElementById('authorName');
const authorIcon = document.getElementById('authorIcon');
const authorUrl = document.getElementById('authorUrl');
const thumbnailUrl = document.getElementById('thumbnailUrl');
const imageUrl = document.getElementById('imageUrl');
const footerText = document.getElementById('footerText');
const footerIcon = document.getElementById('footerIcon');
const includeTimestamp = document.getElementById('includeTimestamp');
const deleteAfter = document.getElementById('deleteAfter');
const messageContent = document.getElementById('messageContent');
const embedContainer = document.getElementById('embedContainer');
const generatedScript = document.getElementById('generatedScript');
const addFieldBtn = document.getElementById('addField');
const addButtonBtn = document.getElementById('addButton');
const fieldsContainer = document.getElementById('fieldsContainer');
const buttonsContainer = document.getElementById('buttonsContainer');
const copyScriptBtn = document.getElementById('copyScript');
const importScriptBtn = document.getElementById('importScript');

// Color wheel functionality
if (embedColor && colorHex) {
    embedColor.addEventListener('input', (e) => {
        colorHex.value = e.target.value;
        updateEmbedPreview();
    });
    
    colorHex.addEventListener('input', (e) => {
        embedColor.value = e.target.value;
        updateEmbedPreview();
    });
}

// Update preview when any input changes
const inputs = [
    embedUrl, embedTitle, embedDescription, authorName, authorIcon, authorUrl,
    thumbnailUrl, imageUrl, footerText, footerIcon, includeTimestamp, deleteAfter, messageContent
];

inputs.forEach(input => {
    if (input) {
        input.addEventListener('input', updateEmbedPreview);
        if (input.type === 'checkbox') {
            input.addEventListener('change', updateEmbedPreview);
        }
    }
});

// Update embed preview
function updateEmbedPreview() {
    const color = embedColor.value;
    const url = embedUrl.value;
    const title = embedTitle.value;
    const description = embedDescription.value;
    const author = authorName.value;
    const authorIconUrl = authorIcon.value;
    const authorUrlValue = authorUrl.value;
    const thumbnail = thumbnailUrl.value;
    const image = imageUrl.value;
    const footer = footerText.value;
    const footerIconUrl = footerIcon.value;
    const timestamp = includeTimestamp.checked;
    
    let embedHTML = '';
    
    // Start embed container
    embedHTML += '<div class="discord-embed" style="border-left: 4px solid ' + color + ';">';
    
    // Author section
    if (author || authorIconUrl) {
        embedHTML += '<div class="embed-author">';
        if (authorIconUrl) {
            embedHTML += '<img src="' + authorIconUrl + '" alt="Author" class="author-icon">';
        }
        if (author) {
            embedHTML += '<span class="author-name">' + author + '</span>';
        }
        embedHTML += '</div>';
    }
    
    // Title
    if (title) {
        if (url) {
            embedHTML += '<div class="embed-title"><a href="' + url + '" target="_blank">' + title + '</a></div>';
        } else {
            embedHTML += '<div class="embed-title">' + title + '</div>';
        }
    }
    
    // Description
    if (description) {
        embedHTML += '<div class="embed-description">' + description + '</div>';
    }
    
    // Fields
    const fields = document.querySelectorAll('.field-item');
    if (fields.length > 0) {
        embedHTML += '<div class="embed-fields">';
        fields.forEach(field => {
            const fieldName = field.querySelector('.field-name').value;
            const fieldValue = field.querySelector('.field-value').value;
            const fieldInline = field.querySelector('.field-inline').checked;
            
            if (fieldName || fieldValue) {
                embedHTML += '<div class="embed-field' + (fieldInline ? ' inline' : '') + '">';
                if (fieldName) {
                    embedHTML += '<div class="field-name">' + fieldName + '</div>';
                }
                if (fieldValue) {
                    embedHTML += '<div class="field-value">' + fieldValue + '</div>';
                }
                embedHTML += '</div>';
            }
        });
        embedHTML += '</div>';
    }
    
    // Thumbnail
    if (thumbnail) {
        embedHTML += '<div class="embed-thumbnail"><img src="' + thumbnail + '" alt="Thumbnail"></div>';
    }
    
    // Image
    if (image) {
        embedHTML += '<div class="embed-image"><img src="' + image + '" alt="Image"></div>';
    }
    
    // Footer
    if (footer || footerIconUrl) {
        embedHTML += '<div class="embed-footer">';
        if (footerIconUrl) {
            embedHTML += '<img src="' + footerIconUrl + '" alt="Footer Icon" class="footer-icon">';
        }
        if (footer) {
            embedHTML += '<span class="footer-text">' + footer + '</span>';
        }
        if (timestamp) {
            embedHTML += '<span class="footer-timestamp">' + new Date().toLocaleString() + '</span>';
        }
        embedHTML += '</div>';
    }
    
    embedHTML += '</div>';
    
    embedContainer.innerHTML = embedHTML;
    updateGeneratedScript();
}

// Update generated script
function updateGeneratedScript() {
    const color = embedColor.value;
    const url = embedUrl.value;
    const title = embedTitle.value;
    const description = embedDescription.value;
    const author = authorName.value;
    const authorIconUrl = authorIcon.value;
    const authorUrlValue = authorUrl.value;
    const thumbnail = thumbnailUrl.value;
    const image = imageUrl.value;
    const footer = footerText.value;
    const footerIconUrl = footerIcon.value;
    const timestamp = includeTimestamp.checked;
    const deleteTime = deleteAfter.value;
    const message = messageContent.value;
    
    let script = '{\n';
    script += '  "embeds": [{\n';
    
    if (color) script += '    "color": ' + parseInt(color.replace('#', ''), 16) + ',\n';
    if (url) script += '    "url": "' + url + '",\n';
    if (title) script += '    "title": "' + title + '",\n';
    if (description) script += '    "description": "' + description + '",\n';
    
    // Author
    if (author || authorIconUrl || authorUrlValue) {
        script += '    "author": {\n';
        if (author) script += '      "name": "' + author + '",\n';
        if (authorIconUrl) script += '      "icon_url": "' + authorIconUrl + '",\n';
        if (authorUrlValue) script += '      "url": "' + authorUrlValue + '"\n';
        script += '    },\n';
    }
    
    // Fields
    const fields = document.querySelectorAll('.field-item');
    if (fields.length > 0) {
        script += '    "fields": [\n';
        fields.forEach((field, index) => {
            const fieldName = field.querySelector('.field-name').value;
            const fieldValue = field.querySelector('.field-value').value;
            const fieldInline = field.querySelector('.field-inline').checked;
            
            if (fieldName || fieldValue) {
                script += '      {\n';
                if (fieldName) script += '        "name": "' + fieldName + '",\n';
                if (fieldValue) script += '        "value": "' + fieldValue + '",\n';
                script += '        "inline": ' + fieldInline + '\n';
                script += '      }' + (index < fields.length - 1 ? ',' : '') + '\n';
            }
        });
        script += '    ],\n';
    }
    
    // Thumbnail
    if (thumbnail) script += '    "thumbnail": {\n      "url": "' + thumbnail + '"\n    },\n';
    
    // Image
    if (image) script += '    "image": {\n      "url": "' + image + '"\n    },\n';
    
    // Footer
    if (footer || footerIconUrl) {
        script += '    "footer": {\n';
        if (footer) script += '      "text": "' + footer + '",\n';
        if (footerIconUrl) script += '      "icon_url": "' + footerIconUrl + '"\n';
        script += '    },\n';
    }
    
    // Timestamp
    if (timestamp) script += '    "timestamp": "' + new Date().toISOString() + '",\n';
    
    script = script.replace(/,\n$/, '\n');
    script += '  }]\n';
    script += '}';
    
    if (deleteTime) {
        script = '{\n  "content": "' + message + '",\n  "embeds": [{\n' + script.substring(script.indexOf('"color"') - 2);
        script += ',\n  "delete_after": ' + deleteTime + '\n}';
    } else if (message) {
        script = '{\n  "content": "' + message + '",\n  "embeds": [{\n' + script.substring(script.indexOf('"color"') - 2);
    }
    
    generatedScript.value = script;
}

// Add field functionality
if (addFieldBtn) {
    addFieldBtn.addEventListener('click', () => {
        const fieldItem = document.createElement('div');
        fieldItem.className = 'field-item';
        fieldItem.innerHTML = `
            <div class="field-inputs">
                <div class="form-group">
                    <label>Field Name</label>
                    <input type="text" class="field-name" placeholder="Enter field name">
                </div>
                <div class="form-group">
                    <label>Field Value</label>
                    <textarea class="field-value" placeholder="Enter field value" rows="2"></textarea>
                </div>
                <div class="form-group checkbox-group">
                    <label class="checkbox-label">
                        <input type="checkbox" class="field-inline">
                        <span class="checkmark"></span>
                        Inline
                    </label>
                </div>
            </div>
            <button class="btn btn-danger remove-field">
                <i class="fas fa-trash"></i>
                Remove Field
            </button>
        `;
        
        fieldsContainer.appendChild(fieldItem);
        
        // Add event listeners to new field
        const inputs = fieldItem.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', updateEmbedPreview);
            if (input.type === 'checkbox') {
                input.addEventListener('change', updateEmbedPreview);
            }
        });
        
        // Remove field functionality
        const removeBtn = fieldItem.querySelector('.remove-field');
        removeBtn.addEventListener('click', () => {
            fieldItem.remove();
            updateEmbedPreview();
        });
    });
}

// Add button functionality
if (addButtonBtn) {
    addButtonBtn.addEventListener('click', () => {
        const buttonItem = document.createElement('div');
        buttonItem.className = 'button-item';
        buttonItem.innerHTML = `
            <div class="button-inputs">
                <div class="form-group">
                    <label>Button Label</label>
                    <input type="text" class="button-label" placeholder="Enter button label">
                </div>
                <div class="form-group">
                    <label>Button URL</label>
                    <input type="url" class="button-url" placeholder="Enter button URL">
                </div>
                <div class="form-group">
                    <label>Button Style</label>
                    <select class="button-style">
                        <option value="primary">Primary</option>
                        <option value="secondary">Secondary</option>
                        <option value="success">Success</option>
                        <option value="danger">Danger</option>
                    </select>
                </div>
            </div>
            <button class="btn btn-danger remove-button">
                <i class="fas fa-trash"></i>
                Remove Button
            </button>
        `;
        
        buttonsContainer.appendChild(buttonItem);
        
        // Add event listeners to new button
        const inputs = buttonItem.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('input', updateEmbedPreview);
        });
        
        // Remove button functionality
        const removeBtn = buttonItem.querySelector('.remove-button');
        removeBtn.addEventListener('click', () => {
            buttonItem.remove();
            updateEmbedPreview();
        });
    });
}

// Copy script functionality
if (copyScriptBtn) {
    copyScriptBtn.addEventListener('click', () => {
        generatedScript.select();
        document.execCommand('copy');
        
        // Show feedback
        copyScriptBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
            copyScriptBtn.innerHTML = '<i class="fas fa-copy"></i> Copy Script';
        }, 2000);
    });
}

// Import script functionality
if (importScriptBtn) {
    importScriptBtn.addEventListener('click', () => {
        const script = prompt('Paste your embed script here:');
        if (script) {
            try {
                const embedData = JSON.parse(script);
                const embed = embedData.embeds?.[0] || embedData;
                
                if (embed.color) {
                    const color = '#' + embed.color.toString(16).padStart(6, '0');
                    embedColor.value = color;
                    colorHex.value = color;
                }
                if (embed.url) embedUrl.value = embed.url;
                if (embed.title) embedTitle.value = embed.title;
                if (embed.description) embedDescription.value = embed.description;
                
                if (embed.author) {
                    if (embed.author.name) authorName.value = embed.author.name;
                    if (embed.author.icon_url) authorIcon.value = embed.author.icon_url;
                    if (embed.author.url) authorUrl.value = embed.author.url;
                }
                
                if (embed.thumbnail?.url) thumbnailUrl.value = embed.thumbnail.url;
                if (embed.image?.url) imageUrl.value = embed.image.url;
                
                if (embed.footer) {
                    if (embed.footer.text) footerText.value = embed.footer.text;
                    if (embed.footer.icon_url) footerIcon.value = embed.footer.icon_url;
                }
                
                if (embed.timestamp) includeTimestamp.checked = true;
                if (embedData.delete_after) deleteAfter.value = embedData.delete_after;
                if (embedData.content) messageContent.value = embedData.content;
                
                updateEmbedPreview();
            } catch (error) {
                alert('Invalid script format. Please check your JSON syntax.');
            }
        }
    });
}

// Initialize embed preview
document.addEventListener('DOMContentLoaded', () => {
    updateEmbedPreview();
}); 
