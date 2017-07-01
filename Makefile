

COMPONENTS = book-tile

VUE_DIR = assets/vsfc
VUE_COMPONENTS = $(foreach COMPONENT,$(COMPONENTS),$(VUE_DIR)/$(COMPONENT).vue)

assets/js/components.js: $(VUE_COMPONENTS)
	vuecc -o $@ $^

clean:
	rm assets/js/components.js
