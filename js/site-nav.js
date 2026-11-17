(()=>{
      const headers=document.querySelectorAll('.site-header');
        headers.forEach((header,index)=>{
            const menu=header.querySelector('.site-nav');
                const wrap=header.querySelector('.site-header__wrap');
                    if(!menu||!wrap||header.querySelector('.site-nav-toggle')) return;
                        const menuId=menu.id||('site-primary-menu-'+index);
                            menu.id=menuId;
                                const toggle=document.createElement('button');
                                    toggle.className='site-nav-toggle';
                                        toggle.type='button';
                                            toggle.textContent='메뉴';
                                                toggle.setAttribute('aria-expanded','false');
                                                    toggle.setAttribute('aria-controls',menuId);
                                                        wrap.insertBefore(toggle,menu);
                                                            header.classList.add('site-nav-ready');
                                                                const close=()=>{toggle.setAttribute('aria-expanded','false');menu.classList.remove('is-open');};
                                                                    toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));menu.classList.toggle('is-open',!open);});
                                                                        menu.addEventListener('click',event=>{if(event.target.closest('a')) close();});
                                                                            document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.classList.contains('is-open')){close();toggle.focus();}});
                                                                                window.addEventListener('resize',()=>{if(window.innerWidth>560) close();});
                                                                                  });
                                                                                  })();

