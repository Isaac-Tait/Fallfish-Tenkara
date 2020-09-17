import React from "react"
import Navigation from "./navigation"

function navLayout() {
    const [collapsed, setCollapsed] = useState(false)
    const [toggled, setToggled] = useState(false)
    
    const handleImageChange = (checked) => {
        setImage(checked);
      };
    
    const handleToggleSidebar = (value) => {
        setToggled(value);
      };
    
    const handleCollapsedChange = (checked) => {
        setCollapsed(checked);
      };

    return (
        <div>
            <Navigation 
                collapsed={collapsed}
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
            />
        </div>
        
    )
};

  export default navLayout