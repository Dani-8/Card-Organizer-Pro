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

    /**
     * HANDLE FORM SUBMISSIOIN FOR ADDING/EDITING THE CARD....
     */

    cardForm.addEventListener("submit", async (e) => {
        e.preventDefault()

        let title = cardTitle.value.trim()
        let description = cardDescp.value.trim()
        let tags = cardTags.value
        let imageFile = cardIMGInput.value[0]
        let 




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

    // const renderCards = () => {
    //     cardsContainer.innerHTML = ""
    //     let searchTerm = searchInput.value.toLowerCase()

    //     const filteredCards = cards.filter(card => {
    //         return card.title.toLowerCase().includes(searchTerm) || card.description.toLowerCase().includes(searchTerm)
    //     })




    // }




























})





































