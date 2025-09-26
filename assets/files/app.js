document.addEventListener("DOMContentLoaded", () => {
    
    const cardsContainer = document.getElementById("cards-container")
    const addCardBtn = document.getElementById("add-card-btn")
    const searchInput = document.getElementById("search-input")
    const emptyState = document.getElementById("empty-state")

    // MODEL
    const modelOverlay = document.getElementById("modal-cont")
    const closeModelBtn = document.getElementById("close-modal-btn")
    const modelTitle = document.getElementById("model-tite")

    // CARD
    const cardForm = document.getElementById("card-form")
    const cardID = document.getElementById("card-id")
    const cardTitle = document.getElementById("card-title")
    const cardDescp = document.getElementById("card-description")
    const cardTags = document.getElementById("card-tag")
    const cardIMGInput = document.getElementById("image-file-input")
    const cardDate = document.getElementById("card-date")

    // CARD BTNS
    const editCardBTN = document.querySelectorAll(".edit-card-button")
    const deleteCardBTN = document.querySelectorAll(".delete-card-button")

    // IMAGE UI
    const cardImgUploadCont = document.getElementById("img-upload-cont")
    const cardImgPreviewCont = document.getElementById("image-preview-cont")
    const imgPreview = document.getElementById("image-preview")
    const clearImgBtn = document.getElementById("clear-image-btn")

    // FORM CARD BTNS
    const cancelCardBtn = document.getElementById("cancel-card-btn")
    const saveCardBtn = document.getElementById("save-card-btn")
    const saveCardBtnText = document.getElementById("save-card-btn-text")


    // DELETE MODEL
    const deleteModal = document.getElementById("confirmation-delete-modal")
    const cancelDeleteBtn = document.getElementById("cancel-delete-btn")
    const confirmDeleteBtn = document.getElementById("confirm-delete-btn")

    // TOAST
    const toastContainer = document.getElementById("toast-container")

    // --------------------------------------------------------------------------------------------------------

    let cards = []
    let cardToDeleteId = null
    let cardSaveId = null

    const LOCAL_STORAGE_KEY = "cardOrganizerPRO"


// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------
    addCardBtn.addEventListener("click", () => openCardModal())
    /**
     * OPEN THE CARD CREATION MODEL
     */
    function openCardModal(cardData = null){
        modelOverlay.classList.remove("hidden")
        cardForm.reset()
        cardImgUploadCont.classList.remove("hidden")
        cardImgPreviewCont.classList.add("hidden")

        if(cardData){
            modelTitle.textContent = "Edit Card"
            saveCardBtn.textContent = "Save Changes"
            
            


        }
    }


    /**
     * EDIT THE CARD 
     */
    editCardBTN.forEach(button => {
        button.addEventListener("click", () => {
            openCardModal()
            console.log("edit");
        })
    })



    /**
     * CLOSE THE CARD CREATION MODEL
     */
    function closeCardModal(){
        modelOverlay.classList.add("hidden")
        cardForm.reset()
        editingCardId = null
        cardImgUploadCont.classList.remove("hidden")
        cardImgPreviewCont.classList.add("hidden")
        saveCardBtnText.textContent = "Add Card"
        modelTitle.textContent = "Add New Card"
    }

    /**
     * CLOSE THE DELETE CONFIRMATION MODAL
     */
    function closeCardModal(){
        modelOverlay.classList.add("hidden")
    }

    closeModelBtn.addEventListener("click", closeCardModal)
    cancelCardBtn.addEventListener("click", closeCardModal)



    /**
     * OPEN THE DELETE CONFIRMATION MODAL
     */
    function openDeleteModal(){
        deleteModal.classList.remove("hidden")
    }

    /**
     * CLOSE THE DELETE CONFIRMATION MODAL
     */
    function closeDeleteModal(){
        deleteModal.classList.add("hidden")
    }






    
    deleteCardBTN.forEach(button => {
        button.addEventListener("click", () => {
            openDeleteModal()
            console.log("del");
            
        })
    })



    /**
     * HANDLE FORM SUBMISSIOIN FOR ADDING/EDITING THE CARD....
     */

    cardForm.addEventListener("submit", async (e) => {
        e.preventDefault()

        let title = cardTitle.value.trim()
        let description = cardDescp.value.trim()
        let tags = cardTags.value
        let imageFile = cardIMGInput.value[0]
        let date = cardDate.value







    })






    /**
     * SHOWS A TOAST NOTIFICATION
     */

    const showToast = (msg, type = "success") => {
        let toast = document.createElement("div")
        toast.classList.add("toast")
        if(type == "error"){
            toast.classList.add("error")
        }

        // ADD SVG ICON BASED ON TYPES
        let svgIcon = ""
        if(type == "success"){
            svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M9 12l2 2 4-4"/></svg>`;
        }else if (type === 'error') {
            svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>`;
        }


        toast.innerHTML = `${svgIcon}<span>${msg}</span>`
        toastContainer.appendChild(toast)

        // REMOVE TOAST 
        setTimeout(() => {
            toast.remove()
        },3000)
    }



    /**
     * UPDATES THE VISIBILITY OF THE EMPTY STATE BASED ON NUMBER OF CARDS.
     */

    const updateEmptyState = (filteredCards) => {
        if(filteredCards.length === 0){
            emptyState.classList.remove("hidden")
            cardsContainer.classList.add("hidden")
        }else{
            emptyState.classList.add("hidden")
            cardsContainer.classList.remove("hidden")
        }
    }



    /**
     * RENDERS CARDS...
     */

    const renderCards = () => {
        cardsContainer.innerHTML = ""
        let searchTerm = searchInput.value.toLowerCase()

        const filteredCards = cards.filter(card => {
            let = titleMatch = card.title.toLowerCase().includes(searchTerm) 
            let = descriptionMatch = card.description.toLowerCase().includes(searchTerm)
            let = tagsMatch = card.tags.some(tag => tag.toLowerCase().includes(searchTerm))

            return titleMatch || descriptionMatch || tagsMatch 
        })

        filteredCards.forEach((card, index) => {
            let cardElement = document.createElement("div")
            cardElement.classList.add("card")
            cardElement.style.animationDelay = `${index * 0.05}s`


            let imageContentHTML = ""

            // FIRST LOCAL FILE IMG, THEN DEFAULT PLACEHOLDER
            if(card.localImageURL){
                imageContentHTML.innerHTML = `
                    <img src="${card.localImageURL}" class="card-image" alt="${card.title}">
                `
            }else{
                // DEFAULT PLACEHOLDER IF NO IMAGE FILE
                imageContentHTML.innerHTML = `
                    <div class="card-image-placeholder">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>
                        </svg>
                    </div>
                `
            }


            // TAGS
            let tagsHTML = card.tags && card.tags.length > 0
            ? `<div class="card-tags">${card.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}</div>`
            : '';


            // CARD
            cardElement.innerHTML = `
                ${imageContentHTML}
                <h3 class="card-title">${card.title}</h3>
                ${card.description ? `<p class="card-description">${card.description}</p>` : ""}
                ${tagsHTML}
                ${card.date 
                    ? `<p class="card-date">
                            <!-- Calendar icon SVG -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
                            </svg>
                            ${card.date || 'No date specified'}
                        </p>`
                : ""}

                <div class="card-actions">
                    <button class="card-action-button edit-card-button" data-id="${card.id}" aria-label="Edit card: ${card.title}">
                        <!-- Edit3 icon SVG -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                        </svg>
                    </button>
                    <button class="card-action-button delete-card-button" data-id="${card.id}" aria-label="Delete card: ${card.title}">
                        <!-- Trash2 icon SVG -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>
                        </svg>
                    </button>
                </div>
            `

            cardsContainer.appendChild(cardElement)
        })


        // DELETE BTN
        document.querySelectorAll(".delete-card-button").forEach(btn => {
            btn.addEventListener("click", (e) => {
                cardToDeleteId = e.currentTarget.dataset.id
                openConfirmModal()
            })
        })

        // EDIT BTN
        document.querySelectorAll(".edit-card-button").forEach(btn => {
            btn.addEventListener("click", (e) => {
                editingCardId = e.currentTarget.dataset.id

                const cardToEdit = cards.find(card => card.id === editingCardId)
                if(cardToEdit){
                    openCardModal(cardToEdit)
                }
            })
        })


        
    }




























})





































