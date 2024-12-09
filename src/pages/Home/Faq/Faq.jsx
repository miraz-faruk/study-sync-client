

const Faq = () => {
    return (
        <div>
            <div>
                <h2 className="text-5xl font-bold text-center my-6">FAQ</h2>

            </div>
            <div className="mb-10 mx-32 flex flex-col items-center">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">How can I create an assignment?</div>
                    <div className="collapse-content">
                        <p>Log in, go to “Create Assignments” in the navbar, fill in the details, and click “Submit.”</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Log in, go to “Create Assignments” in the navbar, fill in the details, and click “Submit.”</div>
                    <div className="collapse-content">
                        <p>Log in, go to “Create Assignments” in the navbar, fill in the details, and click “Submit.”</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Log in, go to “Create Assignments” in the navbar, fill in the details, and click “Submit.”</div>
                    <div className="collapse-content">
                        <p>Log in, go to “Create Assignments” in the navbar, fill in the details, and click “Submit.”</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;