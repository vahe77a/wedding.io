(function () {

    const cd = document.querySelector(".cd");
    if (cd) {
        const targetStr = cd.getAttribute("data-target");
        const target = new Date(targetStr);

        const $days = document.getElementById("cdDays");
        const $hours = document.getElementById("cdHours");
        const $mins = document.getElementById("cdMins");
        const $secs = document.getElementById("cdSecs");

        function pad(n) {
            return String(n).padStart(2, "0");
        }

        function tick() {
            const now = new Date();
            let diff = target.getTime() - now.getTime();

            if (diff < 0) diff = 0;

            const totalSeconds = Math.floor(diff / 1000);
            const days = Math.floor(totalSeconds / 86400);
            const hours = Math.floor((totalSeconds % 86400) / 3600);
            const mins = Math.floor((totalSeconds % 3600) / 60);
            const secs = totalSeconds % 60;

            if ($days) $days.textContent = pad(days);
            if ($hours) $hours.textContent = pad(hours);
            if ($mins) $mins.textContent = pad(mins);
            if ($secs) $secs.textContent = pad(secs);
        }

        tick();
        setInterval(tick, 1000);
    }










        const svg = document.querySelector("svg.line-svg");
        if (!svg) return;

        const path = svg.querySelector("#timelinePath");
        const heart = svg.querySelector("#heart");
        const heartNumber = svg.querySelector("#heartNumber");
        if (!path || !heart) return;

        // ====== Config ======
        // Which scroll range should control the animation?
        // Start when the SVG enters viewport, finish when it almost leaves.
        const START_OFFSET = 0.35; // 0..1 (viewport height multiplier)
        const END_OFFSET = 0.50;

        // If your heart should be anchored by its text center:
        const anchorX = heartNumber ? parseFloat(heartNumber.getAttribute("x") || "107") : 107;
        const anchorY = heartNumber ? parseFloat(heartNumber.getAttribute("y") || "20") : 20;

        // ====== Prepare path for "draw" animation ======
        const pathLen = path.getTotalLength();

        // Makes the stroke drawable (you can keep stroke-dasharray="5 5" in markup,
        // but for "draw" we need full-length dasharray & animated dashoffset)
        //   path.style.strokeDasharray = `${pathLen} ${pathLen}`;
        path.style.strokeDasharray = `6 6`;
        path.style.strokeDashoffset = `${pathLen}`;
        path.style.strokeDashoffset = `${pathLen}`;
        path.style.willChange = "stroke-dashoffset";

        // For smoother heart movement
        heart.style.willChange = "transform";

        let raf = null;

        function clamp01(v) {
            return Math.max(0, Math.min(1, v));
        }

        function getProgress() {
            const rect = svg.getBoundingClientRect();
            const vh = window.innerHeight || document.documentElement.clientHeight;

            // Map scroll position to 0..1 based on when SVG is in view
            // progress=0 when svg top is at 85% of viewport height
            // progress=1 when svg bottom is at 20% of viewport height
            const startY = vh * START_OFFSET;
            const endY = vh * END_OFFSET;

            // We want progress as the SVG travels upward through the viewport
            const total = (rect.height + (startY - endY));
            const traveled = (startY - rect.top);

            return clamp01(traveled / total);
        }

        function render() {
            raf = null;

            const t = getProgress();

            // 1) Draw the line
            // path.style.strokeDashoffset = `${pathLen * (1 - t)}`;

            // 2) Move the heart along the path
            const pt = path.getPointAtLength(pathLen * t);
            const tx = pt.x - anchorX;
            const ty = pt.y - anchorY;

            // Use SVG transform attribute (most compatible)
            heart.setAttribute("transform", `translate(${tx}, ${ty})`);
        }

        function onScroll() {
            if (raf) return;
            raf = requestAnimationFrame(render);
        }

        // Initial render + listeners
        render();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);






    

    btnn.addEventListener('click',()=>{
        if(vahe.checked){
            vahe.value = "Վահեի";
            armine.value = false;
            hid.value = '2f308c7a-3003-4a31-972d-4d292f8e0635'
        }else if(armine.checked){
            vahe.value = false;
            armine.value = "Արմինեի";
            hid.value = 'ac837508-a765-4f11-b5b3-382056fdc48c'
        }
        
    })



    const animItems = document.querySelectorAll(".anim_items")
    
    if(animItems.length){
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll(params){
            for (let i = 0; i < animItems.length; i++) {
                const animItem = animItems[i];
                const animItemHeight =  animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                
                if(animItemHeight > window.innerHeight){
                    animItemPoint = window.innerHeight - window.innerHeight / animStart
                }

                if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                    animItem.classList.add("active")
                }else{
                    animItem.classList.remove("active")
                }

            }
        }

        function offset(el){
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft} 
        }

        setTimeout(() => {
            animOnScroll()
        }, 300);
    }



        
    let audio = new Audio;
    audio.src = "song.mp3"
    document.addEventListener("touchstart", () => {
        audio.play()
    })
        
        
        
        
        
        
        
    }) ()

        
