// Package widgetcontact is the "Contact" DRIVER — Email / phone / address.
//
// It self-registers into the widget base plugin on import. Install by blank-import:
//
//	import _ "github.com/togo-framework/widget-contact"
package widgetcontact

import "github.com/togo-framework/widget"

func init() {
	widget.Register(widget.Descriptor{
		Key:         "contact",
		Title:       "Contact",
		DefaultZone: "sidebar",
		Asset:       "/widgets/contact.js",
	})
}
