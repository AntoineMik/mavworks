// JavaScript Document


//function toggle(obj)
//{
//	if(obj.style.display == "none")
//	   {
//		   obj.style.display = "block";
//	   
//	   }
//	else
//		{
//			obj.style.display == "none";
//		}
//}

function showMobileMenu()
{
	var menu = document.getElementById("mobile-nav");
	menu.style.display = "block";
}

function hideMobileMenu()
{
	var menu = document.getElementById("mobile-nav");
	menu.style.display = "none";
}

//function to open and close mobile menu
//$(document).ready(
//	
//	function()
//	{
//		$('.mobile-view-image').click(
//			function()
//			{
//				$('.mobile-nav').toggleClass('show');
//			});
//	}
//);
//	
//$(document).ready(
//	function() 
//	{
//		$('.close-icon').click(
//			function()
//			{
//				$('.mobile-nav').toggleClass('hide');
//			});
//	}
//	
//);